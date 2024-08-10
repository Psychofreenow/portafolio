import { Router } from 'express';
import { getAll, deleteUser } from '../controllers/users.js';
import catchedErrors from '../utils/catchedErrors.js';

const userRouter = Router();

// GET
userRouter.get('/', catchedErrors(getAll));

// DELETE
userRouter.delete('/:id', catchedErrors(deleteUser));

export default userRouter;
