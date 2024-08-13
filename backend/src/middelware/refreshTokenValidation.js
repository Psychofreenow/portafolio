import verifyToken from '../utils/verifyToken.js';
import { REFRESH_TOKEN_SECRET_KEY } from '../config/env.js';

const refreshTokenValidation = async (req, res, next) => {
	const authorization = req.headers['authorization'];
	try {
		const result = verifyToken({
			token: authorization,
			secretKey: REFRESH_TOKEN_SECRET_KEY,
		});

		next();
	} catch (error) {
		next(error);
	}
};

export default refreshTokenValidation;
