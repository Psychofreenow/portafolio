import { Sequelize } from 'sequelize';
import { username, password, database, host, dialect } from './DBConfig.js';

const sequelize = new Sequelize(database, username, password, {
	host,
	dialect,
	logging: false,
});

export default sequelize;
