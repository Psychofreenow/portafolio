import { responseWithCookies, responseJSON } from '../utils/reponse.js';
import {
	registerRepository,
	loginRepository,
	refreshTokenRepository,
} from '../database/repository/auth.js';

export const register = async (req, res) => {
	const user = await registerRepository({ body: req.body });

	responseWithCookies(res, 201, user.response, user.msg);
};

export const login = async (req, res) => {
	const user = await loginRepository({ body: req.body });

	responseWithCookies(res, 201, user.response, user.msg);
};

export const logout = async (req, res) => {
	res.clearCookie('refreshToken');
	responseJSON(res, 200, 'user logout');
};

export const refreshToken = async (req, res) => {
	const { refreshToken } = req.cookies;

	const accessToken = await refreshTokenRepository({ token: refreshToken });

	responseJSON(res, 200, accessToken);
};
