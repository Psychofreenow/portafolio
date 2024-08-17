import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';

const config = {
	alias: 'technology',
	attributes: {
		technology_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true,
			primaryKey: true,
			autoIncrement: true,
		},
		technology: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	options: {
		tableName: 'technologies',
	},
};

const Technologies = sequelize.define(
	config.alias,
	config.attributes,
	config.options,
);

export default Technologies;
