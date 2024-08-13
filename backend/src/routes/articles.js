import { Router } from 'express';
import {
	getAll,
	getById,
	createArticle,
	deleteArticle,
	updateArticle,
} from '../controllers/articles.js';
import catchedErrors from '../utils/catchedErrors.js';
import accessTokenValidation from '../middelware/accessTokenValidation.js';
import refreshTokenValidation from '../middelware/refreshTokenValidation.js';

const articleRouter = Router();

// GET
articleRouter.get(
	'/',
	[accessTokenValidation, refreshTokenValidation],
	catchedErrors(getAll),
);
articleRouter.get(
	'/:id',
	[accessTokenValidation, refreshTokenValidation],
	catchedErrors(getById),
);

// CREATE
articleRouter.post(
	'/',
	[accessTokenValidation, refreshTokenValidation],
	catchedErrors(createArticle),
);

// DELETE
articleRouter.delete(
	'/:id',
	[accessTokenValidation, refreshTokenValidation],
	catchedErrors(deleteArticle),
);

// UPDATE
articleRouter.patch(
	'/:id',
	[accessTokenValidation, refreshTokenValidation],
	catchedErrors(updateArticle),
);

export default articleRouter;
