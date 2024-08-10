import Users from '../database/models/Users.js';
import { ClientError } from '../utils/errors.js';

const userExist = async (req, res, next) => {
	const user = await Users.findOne({
		where: {
			email: req.body.email,
		},
	});

	if (user) {
		return next(new ClientError('this user exist'));
	}

	next();
};

export default userExist;
