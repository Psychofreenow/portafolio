import jwt from 'jsonwebtoken';

const verifyToken = ({ token, secretKey }) => {
	const result = jwt.verify(token, secretKey);

	return result;
};

export default verifyToken;
