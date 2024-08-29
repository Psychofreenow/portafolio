import transporter from '../config/nodemailer.js';
import { responseJSON } from '../utils/reponse.js';
import { USER_MAILER } from '../config/env.js';
import parsedContact from '../validations/ContactSchema.js';
import { ValidationError } from '../utils/errors.js';

export const createContactForm = async (req, res) => {
	const validationOk = parsedContact({
		input: {
			name: req.body.name,
			email: req.body.email,
			tel: req.body.tel,
			message: req.body.message,
		},
	});

	if (!validationOk.success)
		throw new ValidationError(
			'validation failed',
			400,
			validationOk.error.issues,
		);

	const { name, email, tel, message } = req.body;

	await transporter.sendMail({
		from: `${name}`,
		to: `${USER_MAILER}`,
		subject: 'CLIENTE DEL PORTAFOLIO',
		text: `Hola, mi nombre es ${name}, mi email: ${email}, mi tel: ${tel}, mi razón: ${message}`,
	});

	await transporter.sendMail({
		from: `${name}`,
		to: `${email}`,
		subject: 'Confirmación de llegada de email',
		text: `Hola ${name}, recibí tu correo, pronto me comunicaré contigo`,
	});

	responseJSON(res, 201, {
		msg: '¡Correo enviado exitosamente! Pronto me pondré en contácto contigo',
	});
};
