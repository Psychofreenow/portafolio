import { responseJSON } from '../utils/reponse.js';
import {
	getAllRepository,
	createRespository,
	deleteRespository,
	updateRepository,
} from '../database/repository/categories.js';

export const getAll = async (req, res) => {
	const categories = await getAllRepository();

	responseJSON(res, 200, categories);
};

export const createCategory = async (req, res) => {
	const category = await createRespository({ body: req.body });

	responseJSON(res, 201, category);
};

export const deleteCategory = async (req, res) => {
	const { id } = req.params;

	const category = await deleteRespository({ id });

	responseJSON(res, 201, category);
};

export const updateCategory = async (req, res) => {
	const { id } = req.params;
	const category = await updateRepository({ body: req.body, id });
	responseJSON(res, 201, category);
};
