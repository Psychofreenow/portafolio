import express, { json, urlencoded } from 'express';
const app = express();
import errorsHandle from './middelware/errorsHandle.js';
import articleRouter from './routes/articles.js';
import categoryRouter from './routes/categories.js';
import userRouter from './routes/users.js';
import authRouter from './routes/auth.js';
import cookieParser from 'cookie-parser';

//MIDDELWARE
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// ROUTES
app.use('/api/articles', articleRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

//EXPRESS ERRORS HANDLE
app.use(errorsHandle);

export default app;
