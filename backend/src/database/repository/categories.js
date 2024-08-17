import sequelize from '../../config/sequelize.js';
import { ClientError } from '../../utils/errors.js';
import Categories from '../models/Categories.js';

export const getAllRepository = async () => {
	const categories = await Categories.findAll({
		attributes: ['category_id', 'category'],
	});

	return {
		msg: 'categories successfully found',
		data: categories,
	};
};

export const createRespository = async ({ body }) => {
	const { categories } = body;

	for (const category of categories) {
		await Categories.create({ category });
	}

	return {
		msg: 'category was successfully created',
	};
};

export const deleteRespository = async ({ id }) => {
	if (!id) throw new ClientError('you must provide the: id');

	const categoriesExist = await Categories.findOne({
		where: { category_id: id },
	});

	if (!categoriesExist)
		throw new ClientError(
			'this category does not exist or has already been deleted',
		);

	await Categories.destroy({
		where: {
			category_id: id,
		},
	});

	return { msg: 'category successfully deleted' };
};

export const updateRepository = async ({ body, id }) => {
	const { category } = body;

	if (!category)
		throw new ClientError(
			'you must provide category if you want to edit the category',
		);

	await Categories.update(
		{ category },
		{
			where: {
				category_id: id,
			},
		},
	);

	return {
		msg: 'article or category edited correctly',
	};
};
