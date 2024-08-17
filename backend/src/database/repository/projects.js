import Projects from '../models/Projects.js';
import Project_technologies from '../models/Project_technologies.js';
import Technologies from '../models/Technologies.js';
import { ClientError } from '../../utils/errors.js';
import generateMultipleImageVersions from '../../utils/generateMultipleImageVersions.js';
import saveImages from '../../services/saveImages.js';
import sequelize from '../../config/sequelize.js';
import { SIZES } from '../../utils/constants.js';

export const getAllRepository = async ({ technology }) => {
	// All projects
	if (!technology) {
		const projects = await Projects.findAll({
			attributes: ['project_id', 'images', 'name'],
			include: [
				{
					model: Technologies,
					attributes: ['technology', 'technology_id'],
					through: {
						model: Project_technologies,
						attributes: [],
					},
				},
			],
		});
		return { msg: 'projects successfully found', data: projects };
	}

	// articles by category
	const projects = await Projects.findAll({
		attributes: ['name'],
		include: [
			{
				model: Technologies,
				attributes: ['technology'],
				where: {
					technology: technology,
				},
				through: {
					model: Project_technologies,
					attributes: [],
				},
			},
		],
	});

	if (!projects)
		throw new ClientError(
			`no projects were found with techology: ${technology}`,
		);

	return { msg: 'projects successfully found', data: projects };
};

export const getByIdRepository = async ({ id }) => {
	// Projects by ID
	const project = await Projects.findOne({
		attributes: ['project_id', 'images', 'name'],
		where: {
			project_id: id,
		},
		include: [
			{
				model: Technologies,
				attributes: ['technology', 'technology_id'],
				through: {
					model: Project_technologies,
					attributes: [],
				},
			},
		],
	});

	if (!project) throw new ClientError(`project not found`);

	return {
		msg: 'project successfully found',
		data: project,
	};
};

export const createRepository = async ({ body, file }) => {
	// Create Projects
	const { name, repository, client, client_src, technologies } = body;

	const buffers = await generateMultipleImageVersions({
		buffer: file.buffer,
		sizes: SIZES,
	});

	const urls = await saveImages({
		buffers: buffers,
		names: [`${name}-sm`, `${name}-mb`, `${name}-lg`],
	});

	if (!name) throw new ClientError('you must provide the: name');
	if (!repository) throw new ClientError('you must provide the: repository');
	if (!client) throw new ClientError('you must provide the: client');
	if (!client_src) throw new ClientError('you must provide the: client_src');

	sequelize.transaction(async t => {
		//create new project
		const [project, _] = await Projects.findOrCreate({
			where: {
				name,
				repository,
				client,
				client_src,
				images: JSON.stringify(urls),
			},

			transaction: t,
		});

		const projectId = project.project_id;

		//save technologies of project
		for (const technologyId of technologies) {
			await Project_technologies.findOrCreate({
				where: {
					project_id: projectId,
					technology_id: technologyId,
				},
				transaction: t,
			});
		}
	});

	return { msg: 'successfully created project' };
};

export const deleteRepository = async ({ id }) => {
	if (!id) throw new ClientError('you must provide the: id');

	const projectExist = await Projects.findOne({
		where: { project_id: id },
	});

	if (!projectExist)
		throw new ClientError(
			'this project does not exist or has already been deleted',
		);

	sequelize.transaction(async t => {
		await Project_technologies.destroy({
			where: {
				project_id: id,
			},
			transaction: t,
		});

		await Projects.destroy({
			where: {
				project_id: id,
			},
			transaction: t,
		});
	});

	return { msg: 'project successfully deleted' };
};

export const updateRepository = async ({ body, file, id }) => {
	const { name, repository, client, client_src, technologies } = body;

	const buffers = await generateMultipleImageVersions({
		buffer: file.buffer,
		sizes: SIZES,
	});

	const urls = await saveImages({
		buffers: buffers,
		names: [`${name}-sm`, `${name}-mb`, `${name}-lg`],
	});

	sequelize.transaction(async t => {
		//update  project
		await Projects.update(
			{
				name,
				repository,
				client,
				client_src,
				images: JSON.stringify(urls),
			},
			{
				where: {
					project_id: id,
				},
				transaction: t,
			},
		);

		// delete old technologies
		await Project_technologies.destroy({
			where: {
				project_id: id,
			},
			transaction: t,
		});

		// new technologies
		for (const technologyId of technologies) {
			await Project_technologies.create(
				{
					project_id: id,
					technology_id: technologyId,
				},
				{
					transaction: t,
				},
			);
		}
	});

	return {
		msg: 'Project and technologies updated successfully',
	};
};
