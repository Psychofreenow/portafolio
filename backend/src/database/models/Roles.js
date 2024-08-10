import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';

const config = {
	alias: 'rol',
	attributes: {
		rol_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true,
			primaryKey: true,
			autoIncrement: true,
		},
		rol: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	options: {
		tableName: 'roles',
	},
};

const Roles = sequelize.define(config.alias, config.attributes, config.options);

export default Roles;
