import { Router } from 'express';
import {
	getAll,
	createCategory,
	deleteCategory,
	updateCategory,
} from '../controllers/categories.js';
import catchedErrors from '../utils/catchedErrors.js';
import accessTokenValidation from '../middelware/accessTokenValidation.js';
import refreshTokenValidation from '../middelware/refreshTokenValidation.js';

const categoryRouter = Router();

// GET
categoryRouter.get(
	'/',
	[accessTokenValidation, refreshTokenValidation],
	catchedErrors(getAll),
);

// CREATE
categoryRouter.post(
	'/',
	[accessTokenValidation, refreshTokenValidation],
	catchedErrors(createCategory),
);

//DELETE
categoryRouter.delete(
	'/:id',
	[accessTokenValidation, refreshTokenValidation],
	catchedErrors(deleteCategory),
);

//UPDATE
categoryRouter.patch(
	'/:id',
	[accessTokenValidation, refreshTokenValidation],
	catchedErrors(updateCategory),
);

export default categoryRouter;
