import { responseWithCookies } from '../utils/reponse.js';
import { registerRepository } from '../database/repository/auth.js';

export const register = async (req, res) => {
	const user = await registerRepository({ body: req.body });

	responseWithCookies(res, 201, user.response, user.msg);
};

export const login = async (req, res) => {};
