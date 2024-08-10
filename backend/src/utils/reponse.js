import cookieConfig from '../config/cookiesConfig.js';

export const responseJSON = (res, code, response = {}) => {
	return res.status(code).json({
		ok: true,
		code,
		response,
	});
};

export const responseWithCookies = (res, code, response) => {
	const newReponse = {
		accessToken: response.accessToken,
	};

	return res
		.status(code)
		.cookie('refreshToken', response.refreshToken, cookieConfig)
		.json({
			ok: true,
			code,
			response: newReponse,
		});
};
