import Articles from '../models/Articles.js';
import Article_categories from '../models/Article_categories.js';
import Categories from '../models/Categories.js';
import { ClientError } from '../../utils/errors.js';

export const getAllRepository = async ({ category }) => {
	// All articles
	if (!category) {
		const articles = await Articles.findAll({
			attributes: ['title', 'article_id', 'post'],
			include: [
				{
					model: Categories,
					attributes: ['category'],
					through: {
						model: Article_categories,
						attributes: [],
					},
				},
			],
		});
		return { msg: 'articles successfully found', data: articles };
	}

	// articles by category
	const articleByCategory = await Articles.findAll({
		attributes: ['title', 'article_id', 'post'],
		include: [
			{
				model: Categories,
				attributes: ['category'],
				where: {
					category: category,
				},
				through: {
					model: Article_categories,
					attributes: [],
				},
			},
		],
	});

	if (!articleByCategory)
		throw new ClientError(`no articles were found with category: ${category}`);

	return { msg: 'articles successfully found', data: articleByCategory };
};

export const getByIdRepository = async ({ id }) => {
	// Articles by ID
	const articlesByID = await Articles.findOne({
		attributes: ['title', 'article_id', 'post'],
		where: {
			article_id: id,
		},
		include: [
			{
				model: Categories,
				attributes: ['category'],
				through: {
					model: Article_categories,
					attributes: [],
				},
			},
		],
	});

	if (!articlesByID) throw new ClientError(`Article not found`);

	return {
		msg: 'article successfully found',
		data: articlesByID,
	};
};

export const createRepository = async ({ body }) => {
	// Create Articles
	const { title, post, user_id } = body;

	if (!user_id) throw new ClientError('you must provide the: user_id');
	if (!post) throw new ClientError('you must provide the: post');
	if (!title) throw new ClientError('you must provide the: title');

	await Articles.findOrCreate({ where: { title, post, user_id } });

	return { msg: 'successfully created article' };
};

export const deleteRepository = async ({ id }) => {
	if (!id) throw new ClientError('you must provide the: id');

	const articleExist = await Articles.findOne({
		where: { article_id: id },
	});

	if (!articleExist)
		throw new ClientError(
			'this article does not exist or has already been deleted',
		);

	await Articles.destroy({
		where: {
			article_id: id,
		},
	});

	return { msg: 'article successfully deleted' };
};

export const updateRepository = async ({ body, id }) => {
	const { title, post, category_id } = body;

	if (!title && !post)
		throw new ClientError(
			'you must provide title or post if you want to edit the article',
		);

	await Articles.update(
		{ title, post },
		{
			where: {
				article_id: id,
			},
		},
	);

	await Article_categories.update(
		{ category_id },
		{
			where: {
				article_id: id,
			},
		},
	);

	return {
		msg: 'article or category edited correctly',
	};
};
