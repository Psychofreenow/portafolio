import verifyToken from '../utils/verifyToken.js';
import { ACCESS_TOKEN_SECRET_KEY } from '../config/env.js';

const accessTokenValidation = (req, res, next) => {
	const authorization = req.headers['authorization'];
	try {
		const result = verifyToken({
			token: authorization,
			secretKey: ACCESS_TOKEN_SECRET_KEY,
		});

		next();
	} catch (error) {
		next(error);
	}
};

export default accessTokenValidation;
