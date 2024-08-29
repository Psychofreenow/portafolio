import { z } from 'zod';
import validator from 'validator';

const ContactFormSchema = z.object({
	name: z
		.string({ message: 'Este campo es requerido' })
		.max(255)
		.refine(val => /^[a-zA-Z ]*$/.test(val), {
			message: 'Este campo solo acepta letras y espacios',
		}),
	email: z
		.string({ message: 'Este campo es requerido' })
		.email('Este campo es de tipo Email')
		.min(1, { message: 'this field is required' }),
	tel: z
		.string({ message: 'Este campo debe ser un número de teléfono' })
		.refine(validator.isMobilePhone),
	message: z.string({ message: 'Este campo es requerido' }),
});

const parsedContact = ({ input }) => {
	return ContactFormSchema.safeParse(input);
};

export default parsedContact;
