import jwt from 'jsonwebtoken';
import { UnauthorizedError } from './errors.js';

const verifyToken = ({ token, secretKey }) => {
	const result = jwt.verify(token, secretKey);

	return result;
};

export default verifyToken;
