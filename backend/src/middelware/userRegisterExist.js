import Users from '../database/models/Users.js';
import { ClientError } from '../utils/errors.js';

const userRegisterExist = async (req, res, next) => {
	try {
		const user = await Users.findOne({
			where: {
				email: req.body.email,
			},
		});

		if (user) {
			return next(new ClientError('this user exist'));
		}

		next();
	} catch (error) {
		next(error);
	}
};

export default userRegisterExist;
