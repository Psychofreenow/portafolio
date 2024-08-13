import bcrypt from 'bcryptjs';

const verifyPassword = async ({ password, encryptedPassword }) => {
	const result = await bcrypt.compare(password, encryptedPassword);

	return result;
};

export default verifyPassword;
