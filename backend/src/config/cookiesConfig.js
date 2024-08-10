import { NODE_ENV, COOKIE_MAX_AGE } from './env.js';

const cookieConfig = {
	httpOnly: true,
	secure: NODE_ENV === 'PRODUCTION',
	sameSite: 'strict',
	maxAge: COOKIE_MAX_AGE,
};

export default cookieConfig;
