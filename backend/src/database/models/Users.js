import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';
import Roles from './Roles.js';
import Articles from './Articles.js';

const config = {
	alias: 'user',
	attributes: {
		user_id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			unique: true,
			primaryKey: true,
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		rol_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	options: {
		tableName: 'users',
	},
};

const Users = sequelize.define(config.alias, config.attributes, config.options);

Users.belongsTo(Roles, {
	foreignKey: 'rol_id',
	onDelete: 'CASCADE',
});

Users.hasOne(Articles, {
	foreignKey: 'user_id',
	onDelete: 'CASCADE',
});

export default Users;
