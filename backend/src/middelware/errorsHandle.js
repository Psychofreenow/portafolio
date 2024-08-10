import responseError from '../utils/responseError.js';
import {
	ClientError,
	UnauthorizedError,
	ValidationError,
} from '../utils/errors.js';

const errorsHandle = (err, req, res, next) => {
	console.log(err);
	if (err instanceof ValidationError) {
		responseError(res, err.statusCode, err.completeErrors);
	}

	if (err instanceof ClientError) {
		responseError(res, err.statusCode, err.message);
	}

	if (err instanceof UnauthorizedError) {
		responseError(res, err.statusCode, err.message);
	}
};

export default errorsHandle;
