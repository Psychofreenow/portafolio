import responseError from '../utils/responseError.js';
import {
	ClientError,
	UnauthorizedError,
	ValidationError,
} from '../utils/errors.js';

const errorsHandle = (err, req, res, next) => {
	if (err instanceof ValidationError) {
		return responseError(res, err.statusCode, err.completeErrors);
	}

	if (err instanceof ClientError) {
		return responseError(res, err.statusCode, err.message);
	}

	if (err instanceof UnauthorizedError) {
		return responseError(res, err.statusCode, err.message);
	}

	if (err.name === 'JsonWebTokenError') {
		return responseError(res, 401, err.message);
	}

	responseError(res, 400, err.message);
};

export default errorsHandle;
