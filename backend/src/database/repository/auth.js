import Users from '../models/Users.js';
import crypto from 'node:crypto';
import encryptedPassword from '../../utils/encryptedPassword.js';
import verifyPassword from '../../utils/verifyPassword.js';
import generateToken from '../../utils/generateToken.js';
import verifyToken from '../../utils/verifyToken.js';
import parsedUser from '../../validations/UserSchema.js';
import parsedLoginUser from '../../validations/UserLoginSchema.js';
import {
	ACCESS_TOKEN_SECRET_KEY,
	REFRESH_TOKEN_SECRET_KEY,
	ACCESS_TOKEN_MAX_AGE,
	REFRESH_TOKEN_MAX_AGE,
} from '../../config/env.js';
import { Op } from 'sequelize';
import { UnauthorizedError, ValidationError } from '../../utils/errors.js';

export const registerRepository = async ({ body }) => {
	const validationOk = parsedUser({ input: body });

	if (!validationOk.success)
		throw new ValidationError(
			'validation failed',
			400,
			validationOk.error.issues,
		);

	const { first_name, last_name, username, email, password } = body;

	const DEFAULT_ROL = 2;

	const newEncryptedPassword = await encryptedPassword({
		input: password,
		salt: 10,
	});

	const newUser = {
		user_id: crypto.randomUUID(),
		first_name,
		last_name,
		username,
		email,
		password: newEncryptedPassword,
		rol_id: DEFAULT_ROL,
	};

	await Users.create({
		user_id: newUser.user_id,
		first_name: newUser.first_name,
		last_name: newUser.last_name,
		username: newUser.username,
		email: newUser.email,
		password: newUser.password,
		rol_id: newUser.rol_id,
	});

	//Create tokens
	const accessToken = generateToken(
		{
			user_id: newUser.user_id,
			username: newUser.username,
		},
		ACCESS_TOKEN_SECRET_KEY,
		ACCESS_TOKEN_MAX_AGE,
	);

	const refreshToken = generateToken(
		{
			user_id: newUser.user_id,
			username: newUser.username,
		},
		REFRESH_TOKEN_SECRET_KEY,
		REFRESH_TOKEN_MAX_AGE,
	);

	return {
		msg: 'user was successfully created',
		response: {
			accessToken: accessToken,
			refreshToken: refreshToken,
		},
	};
};

export const loginRepository = async ({ body }) => {
	const validationOk = parsedLoginUser({ input: body });

	if (!validationOk.success)
		throw new ValidationError(
			'validation failed',
			400,
			validationOk.error.issues,
		);

	const { username, password } = body;

	const user = await Users.findOne({
		attributes: ['username', 'email', 'password'],
		where: {
			[Op.or]: [{ username: username }, { email: username }],
		},
	});

	const result = await verifyPassword({
		password: password,
		encryptedPassword: user.password,
	});

	if (!result) throw new UnauthorizedError('Unauthorized');

	//Create tokens
	const accessToken = generateToken(
		{
			user_id: user.user_id,
			username: user.username,
		},
		ACCESS_TOKEN_SECRET_KEY,
		ACCESS_TOKEN_MAX_AGE,
	);

	const refreshToken = generateToken(
		{
			user_id: user.user_id,
			username: user.username,
		},
		REFRESH_TOKEN_SECRET_KEY,
		REFRESH_TOKEN_MAX_AGE,
	);

	return {
		msg: 'logged in user',
		response: {
			accessToken: accessToken,
			refreshToken: refreshToken,
		},
	};
};

// export const logoutRepository = async () => {};

export const refreshTokenRepository = async ({ token }) => {
	const result = verifyToken({
		token: token,
		secretKey: REFRESH_TOKEN_SECRET_KEY,
	});

	const user = await Users.findOne({
		where: {
			username: result.username,
		},
	});

	if (!user) throw new ValidationError('user not found');

	const accessToken = generateToken(
		{
			user_id: user.user_id,
			username: user.username,
		},
		ACCESS_TOKEN_SECRET_KEY,
		ACCESS_TOKEN_MAX_AGE,
	);

	return {
		msg: 'access token successfully created',
		accessToken: accessToken,
	};
};
