const responseError = (res, code = 500, response) => {
	res.status(code).json({
		ok: false,
		code: code,
		response: response,
	});
};

export default responseError;
