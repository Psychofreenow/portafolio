import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';

const config = {
	alias: 'category',
	attributes: {
		category_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true,
			primaryKey: true,
			autoIncrement: true,
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
	},
	options: {
		tableName: 'categories',
	},
};

const Categories = sequelize.define(
	config.alias,
	config.attributes,
	config.options,
);

export default Categories;
