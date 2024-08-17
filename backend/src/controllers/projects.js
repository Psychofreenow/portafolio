import { responseJSON } from '../utils/reponse.js';
import {
	getAllRepository,
	getByIdRepository,
	createRepository,
	deleteRepository,
	updateRepository,
} from '../database/repository/projects.js';

export const getAll = async (req, res) => {
	const { technology } = req.query;
	const project = await getAllRepository({ technology });
	responseJSON(res, 200, project);
};

export const getById = async (req, res) => {
	const { id } = req.params;
	const project = await getByIdRepository({ id });
	responseJSON(res, 200, project);
};

export const createProject = async (req, res) => {
	const project = await createRepository({ body: req.body, file: req.file });
	responseJSON(res, 201, project);
};

export const deleteProject = async (req, res) => {
	const { id } = req.params;
	const project = await deleteRepository({ id });
	responseJSON(res, 201, project);
};

export const updateProject = async (req, res) => {
	const { id } = req.params;
	const project = await updateRepository({
		body: req.body,
		file: req.file,
		id,
	});
	responseJSON(res, 201, project);
};
