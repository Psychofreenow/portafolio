import { Router } from 'express';
import { createContactForm } from '../controllers/contactForm.js';
import catchedErrors from '../utils/catchedErrors.js';

const contactFormRouter = Router();

contactFormRouter.post('/', catchedErrors(createContactForm));

export default contactFormRouter;
