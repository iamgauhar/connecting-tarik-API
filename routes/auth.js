import { Router } from 'express';
import { signup } from '../controllers/auth.js';
import validate from '../middlewares/validate.js';
import { signupValidation } from '../validations/authValidation.js';
const router = Router();

router.post('/signup', validate(signupValidation), signup);

export default router;
