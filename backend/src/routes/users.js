import { Router } from 'express';
import { getAll, deleteUser } from '../controllers/users.js';
import catchedErrors from '../utils/catchedErrors.js';
import isAdmin from '../middelware/isAdmin.js';
import refreshTokenValidation from '../middelware/refreshTokenValidation.js';
import accessTokenValidation from '../middelware/accessTokenValidation.js';

const userRouter = Router();

// GET
userRouter.get(
	'/',
	[isAdmin, refreshTokenValidation, accessTokenValidation],
	catchedErrors(getAll),
);

// DELETE
userRouter.delete(
	'/:id',
	[isAdmin, refreshTokenValidation, accessTokenValidation],
	catchedErrors(deleteUser),
);

export default userRouter;
