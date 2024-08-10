import { Router } from 'express';
import {
	getAll,
	getById,
	createArticle,
	deleteArticle,
	updateArticle,
} from '../controllers/articles.js';
import catchedErrors from '../utils/catchedErrors.js';

const articleRouter = Router();

// GET
articleRouter.get('/', catchedErrors(getAll));
articleRouter.get('/:id', catchedErrors(getById));

// CREATE
articleRouter.post('/', catchedErrors(createArticle));

// DELETE
articleRouter.delete('/:id', catchedErrors(deleteArticle));

// UPDATE
articleRouter.patch('/:id', catchedErrors(updateArticle));

export default articleRouter;
