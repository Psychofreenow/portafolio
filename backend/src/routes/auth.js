import { Router } from 'express';
import { register, login } from '../controllers/auth.js';
import catchedErrors from '../utils/catchedErrors.js';
import userRegisterValidation from '../middelware/userRegisterValidation.js';
import userExist from '../middelware/userExist.js';

const authRouter = Router();

// REGISTER
authRouter.post(
	'/register',
	[userRegisterValidation, userExist],
	catchedErrors(register),
);

// LOGIN
authRouter.post('/login', catchedErrors(login));

// LOGOUT
// authRouter.post();

//REFRESH TOKEN
// authRouter.get('/refresh-token');

// GOOGLE

export default authRouter;
