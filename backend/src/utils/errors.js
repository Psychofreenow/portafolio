export class ClientError extends Error {
	constructor(message, status = 400) {
		super(message);
		this.statusCode = status;
	}
}

export class ValidationError extends Error {
	constructor(message, status = 403, completeErrors) {
		super(message);
		this.statusCode = status;
		this.completeErrors = completeErrors;
	}
}

export class UnauthorizedError extends Error {
	constructor(message, status = 401) {
		super(message);
		this.statusCode = status;
	}
}
