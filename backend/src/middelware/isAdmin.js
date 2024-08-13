import Users from '../database/models/Users.js';
import verifyToken from '../utils/verifyToken.js';
import { ACCESS_TOKEN_SECRET_KEY } from '../config/env.js';
import { ClientError, UnauthorizedError } from '../utils/errors.js';

const isAdmin = async (req, res, next) => {
	const ADMIN_ROL = 1;
	const authorization = req.headers['authorization'];
	try {
		const result = verifyToken({
			token: authorization,
			secretKey: ACCESS_TOKEN_SECRET_KEY,
		});

		const user = await Users.findOne({
			attributes: ['rol_id'],
			where: {
				username: result.username,
			},
		});

		if (!user) throw new ClientError('User not exist');
		if (user.rol_id !== ADMIN_ROL) throw new UnauthorizedError('Unauthorized');

		next();
	} catch (error) {
		next(error);
	}
};

export default isAdmin;
