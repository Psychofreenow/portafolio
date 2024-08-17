import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';

const config = {
	alias: 'project_technology',
	attributes: {
		technology_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true,
		},
		project_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true,
		},
	},
	options: {
		tableName: 'project_technologies',
	},
};

const Project_technologies = sequelize.define(
	config.alias,
	config.attributes,
	config.options,
);

export default Project_technologies;
