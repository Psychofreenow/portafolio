import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';
import Articles from './Articles.js';
import Categories from './Categories.js';

const config = {
	alias: 'article_category',
	attributes: {
		article_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		category_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
	},
	options: {
		tableName: 'article_categories',
	},
};

const Article_categories = sequelize.define(
	config.alias,
	config.attributes,
	config.options,
);

export default Article_categories;
