import sequelize from '../../config/sequelize.js';
import Article_categories from './Article_categories.js';
import Categories from './Categories.js';
import { DataTypes } from 'sequelize';

const config = {
	alias: 'article',
	attributes: {
		article_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true,
		},
		post: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		user_id: {
			type: DataTypes.UUID,
			allowNull: false,
		},
	},
	options: {
		tableName: 'articles',
	},
};

const Articles = sequelize.define(
	config.alias,
	config.attributes,
	config.options,
);

Articles.belongsToMany(Categories, {
	through: {
		model: Article_categories,
	},
	foreignKey: 'article_id',
	otherKey: 'category_id',
});

export default Articles;
