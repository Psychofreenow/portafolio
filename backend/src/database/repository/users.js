import Users from '../models/Users.js';
import Roles from '../models/Roles.js';
import { ClientError } from '../../utils/errors.js';

export const getAllRepository = async () => {
	const users = await Users.findAll({
		attributes: [
			'user_id',
			'first_name',
			'last_name',
			'username',
			'email',
			'password',
		],
		include: [
			{
				model: Roles,
				attributes: ['rol'],
			},
		],
	});

	return {
		msg: 'users successfully found',
		data: users,
	};
};

export const deleteRespository = async ({ id }) => {
	if (!id) throw new ClientError('you must provide the: id');

	const userExist = await Users.findOne({
		where: { user_id: id },
	});

	if (!userExist)
		throw new ClientError(
			'this user does not exist or has already been deleted',
		);

	await Users.destroy({
		where: {
			user_id: id,
		},
	});

	return { msg: 'user successfully deleted' };
};
