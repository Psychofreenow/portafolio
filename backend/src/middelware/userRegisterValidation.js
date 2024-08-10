import { ValidationError } from '../utils/errors.js';
import parsedUser from '../validations/UserSchema.js';

const userRegisterValidation = (req, res, next) => {
	const validationOk = parsedUser({ input: req.body });

	if (!validationOk.success) {
		return next(
			new ValidationError('validation failed', 400, validationOk.error.issues),
		);
	}
	next();
};

export default userRegisterValidation;
