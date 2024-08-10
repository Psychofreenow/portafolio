import {
	deleteRespository,
	getAllRepository,
} from '../database/repository/users.js';
import { responseJSON } from '../utils/reponse.js';

export const getAll = async (req, res) => {
	const categories = await getAllRepository();

	responseJSON(res, 200, categories);
};

export const deleteUser = async (req, res) => {
	const { id } = req.params;

	const user = await deleteRespository({ id });

	responseJSON(res, 200, user);
};
