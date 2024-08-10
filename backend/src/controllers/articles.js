import {
	getAllRepository,
	getByIdRepository,
	createRepository,
	deleteRepository,
	updateRepository,
} from '../database/repository/articles.js';
import { responseJSON } from '../utils/reponse.js';

export const getAll = async (req, res) => {
	const { category } = req.query;

	const articles = await getAllRepository({ category });

	responseJSON(res, 200, articles);
};

export const getById = async (req, res) => {
	const { id } = req.params;

	const article = await getByIdRepository({ id });

	responseJSON(res, 200, article);
};

export const createArticle = async (req, res) => {
	const article = await createRepository({ body: req.body });

	responseJSON(res, 201, article);
};

export const deleteArticle = async (req, res) => {
	const { id } = req.params;

	const article = await deleteRepository({ id });

	responseJSON(res, 201, article);
};

export const updateArticle = async (req, res) => {
	const { id } = req.params;

	const article = await updateRepository({ body: req.body, id });

	responseJSON(res, 201, article);
};
