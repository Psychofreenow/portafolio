import { config } from 'dotenv';
config();

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
const HOST = process.env.HOST;

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_DIALECT = process.env.DB_DIALECT;

const ACCESS_TOKEN_SECRET_KEY = process.env.ACCESS_TOKEN_SECRET_KEY;
const REFRESH_TOKEN_SECRET_KEY = process.env.REFRESH_TOKEN_SECRET_KEY;
const ACCESS_TOKEN_MAX_AGE = process.env.ACCESS_TOKEN_MAX_AGE;
const REFRESH_TOKEN_MAX_AGE = process.env.ACCESS_TOKEN_MAX_AGE;
const COOKIE_MAX_AGE = process.env.COOKIE_MAX_AGE;

export {
	PORT,
	NODE_ENV,
	HOST,
	DB_HOST,
	DB_PORT,
	DB_USERNAME,
	DB_PASSWORD,
	DB_DATABASE,
	DB_DIALECT,
	ACCESS_TOKEN_SECRET_KEY,
	REFRESH_TOKEN_SECRET_KEY,
	ACCESS_TOKEN_MAX_AGE,
	REFRESH_TOKEN_MAX_AGE,
	COOKIE_MAX_AGE,
};
