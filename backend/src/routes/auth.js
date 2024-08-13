import { Router } from 'express';
import { register, login, logout, refreshToken } from '../controllers/auth.js';
import catchedErrors from '../utils/catchedErrors.js';
import userRegisterExist from '../middelware/userRegisterExist.js';
import userLoginExist from '../middelware/userLoginExist.js';

const authRouter = Router();

// REGISTER
authRouter.post('/register', userRegisterExist, catchedErrors(register));

// LOGIN
authRouter.post('/login', userLoginExist, catchedErrors(login));

// LOGOUT
authRouter.post('/logout', logout);

//REFRESH TOKEN
authRouter.get('/refresh-token', catchedErrors(refreshToken));

// GOOGLE

export default authRouter;
