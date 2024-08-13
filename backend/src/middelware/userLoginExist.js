import Users from '../database/models/Users.js';
import { Op } from 'sequelize';
import { ClientError } from '../utils/errors.js';

const userLoginExist = async (req, res, next) => {
	try {
		const user = await Users.findOne({
			where: {
				[Op.or]: {
					email: req.body.username,
					username: req.body.username,
				},
			},
		});

		if (!user) throw new ClientError('this user not exist');

		next();
	} catch (error) {
		next(error);
	}
};

export default userLoginExist;
