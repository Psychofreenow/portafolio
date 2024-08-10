import jwt from 'jsonwebtoken';

const generateToken = (payload = {}, secret_key, expiresIn) => {
	const token = jwt.sign(payload, secret_key, {
		expiresIn,
	});

	return token;
};

export default generateToken;
