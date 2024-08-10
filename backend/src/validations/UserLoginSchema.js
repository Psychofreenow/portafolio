import { z } from 'zod';

const UserLoginSchema = z.object({
	username: z
		.string({ message: 'this field is required' })
		.max(255)
		.refine(
			val =>
				/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val) ||
				/^[a-zA-Z0-9_-]*$/.test(val),
			{
				message:
					'this field only accepts valid emails, letters, numbers, and certain special characters',
			},
		),
	password: z
		.string({ message: 'this field is required' })
		.min(8, { message: 'password must be at least 8 characters long' }),
});
const parsedLoginUser = ({ input }) => {
	return UserLoginSchema.safeParse(input);
};

export default parsedLoginUser;
