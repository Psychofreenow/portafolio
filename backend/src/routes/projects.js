import { Router } from 'express';
import catchedErrors from '../utils/catchedErrors.js';
import {
	getAll,
	getById,
	createProject,
	deleteProject,
	updateProject,
} from '../controllers/projects.js';
import multerManage from '../utils/multerManage.js';
import refreshTokenValidation from '../middelware/refreshTokenValidation.js';
import accessTokenValidation from '../middelware/accessTokenValidation.js';

const projectRouter = Router();

// GET
projectRouter.get(
	'/',
	[accessTokenValidation, refreshTokenValidation],
	catchedErrors(getAll),
);
projectRouter.get(
	'/:id',
	[accessTokenValidation, refreshTokenValidation],
	catchedErrors(getById),
);

// CREATE
projectRouter.post(
	'/',
	[
		accessTokenValidation,
		refreshTokenValidation,
		multerManage({ nameFile: 'image' }),
	],

	catchedErrors(createProject),
);

// DELETE
projectRouter.delete(
	'/:id',
	[accessTokenValidation, refreshTokenValidation],
	catchedErrors(deleteProject),
);

// UPDATE
projectRouter.patch(
	'/:id',
	[
		accessTokenValidation,
		refreshTokenValidation,
		multerManage({ nameFile: 'image' }),
	],
	catchedErrors(updateProject),
);

export default projectRouter;
