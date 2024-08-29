import express, { json, urlencoded } from 'express';
const app = express();
import errorsHandle from './middelware/errorsHandle.js';
import projectRouter from './routes/projects.js';
import articleRouter from './routes/articles.js';
import categoryRouter from './routes/categories.js';
import userRouter from './routes/users.js';
import authRouter from './routes/auth.js';
import contactFormRouter from './routes/contactForm.js';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';
import { CORS_DOMAIN } from './config/env.js';

//MIDDELWARE
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(cors(CORS_DOMAIN));

// ROUTES
app.use('/api/projects', projectRouter);
app.use('/api/articles', articleRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/contact-form', contactFormRouter);

//EXPRESS ERRORS HANDLE
app.use(errorsHandle);

export default app;
