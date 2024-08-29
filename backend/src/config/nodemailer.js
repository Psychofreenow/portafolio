import nodemailer from 'nodemailer';
import {
	HOST_MAILER,
	PORT_MAILER,
	USER_MAILER,
	PASS_MAILER,
	NODE_ENV,
} from './env.js';

const transporter = nodemailer.createTransport({
	host: HOST_MAILER,
	port: PORT_MAILER,
	secure: NODE_ENV === 'DEV' ? false : true,
	auth: {
		user: USER_MAILER,
		pass: PASS_MAILER,
	},
});

export default transporter;
