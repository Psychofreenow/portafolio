import bcrypt from 'bcryptjs';

const encryptedPassword = async ({ input, salt }) => {
	const genSalt = await bcrypt.genSalt(salt);
	const hash = await bcrypt.hash(input, genSalt);

	return hash;
};

export default encryptedPassword;
