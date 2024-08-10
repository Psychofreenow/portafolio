import Users from '../models/Users.js';
import encryptedPassword from '../../utils/encryptedPassword.js';
import crypto from 'node:crypto';
import generateToken from '../../utils/generateToken.js';
import {
	ACCESS_TOKEN_SECRET_KEY,
	REFRESH_TOKEN_SECRET_KEY,
	ACCESS_TOKEN_MAX_AGE,
	REFRESH_TOKEN_MAX_AGE,
} from '../../config/env.js';

export const registerRepository = async ({ body }) => {
	//Create user
	const { first_name, last_name, username, email, password } = body;

	const DEFAULT_ROL = 2;

	const newEncryptedPassword = await encryptedPassword({ input: password });

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

const loginRepository = ({ body }) => {
	const { username, email, password } = body;
};
