import { Router } from 'express';
import {
	getAll,
	createCategory,
	deleteCategory,
	updateCategory,
} from '../controllers/categories.js';
import catchedErrors from '../utils/catchedErrors.js';

const categoryRouter = Router();

// GET
categoryRouter.get('/', catchedErrors(getAll));

// CREATE
categoryRouter.post('/', catchedErrors(createCategory));

//DELETE
categoryRouter.delete('/:id', catchedErrors(deleteCategory));

//UPDATE
categoryRouter.patch('/:id', catchedErrors(updateCategory));

export default categoryRouter;
