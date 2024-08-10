import { z } from 'zod';

const UserSchema = z.object({
	first_name: z
		.string({ message: 'this field is required' })
		.max(255)
		.refine(val => /^[a-zA-Z ]*$/.test(val), {
			message: 'this field only accepts letters and spaces',
		}),
	last_name: z
		.string({ message: 'this field is required' })
		.max(255)
		.refine(val => /^[a-zA-Z ]*$/.test(val), {
			message: 'this field only accepts letters and spaces',
		}),
	username: z
		.string({ message: 'this field is required' })
		.max(255)
		.refine(val => /^[a-zA-Z0-9_-]*$/.test(val), {
			message: 'this field only accepts letters, numbers and spaces',
		}),
	email: z
		.string({ message: 'this field is required' })
		.email('this field is of type email')
		.min(1, { message: 'this field is required' }),
	password: z
		.string({ message: 'this field is required' })
		.min(8, { message: 'password must be at least 8 characters long' }),
});

const parsedUser = ({ input }) => {
	return UserSchema.safeParse(input);
};

export default parsedUser;
