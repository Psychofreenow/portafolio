import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';
import Technologies from './technologies.js';
import Project_technologies from './Project_technologies.js';

const config = {
	alias: 'project',
	attributes: {
		project_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		descriptionOfProject: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		images: {
			type: DataTypes.JSON,
			allowNull: false,
		},
		repository: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		client: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		client_src: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	options: {
		tableName: 'projects',
	},
};

const Projects = sequelize.define(
	config.alias,
	config.attributes,
	config.options,
);

Projects.belongsToMany(Technologies, {
	through: {
		model: Project_technologies,
	},
	foreignKey: 'project_id',
	otherKey: 'technology_id',
	onDelete: 'NO ACTION',
	onUpdate: 'CASCADE',
});

export default Projects;
