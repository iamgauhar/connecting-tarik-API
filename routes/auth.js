import { Router } from 'express';
import { signup, login, resetPassword } from '../controllers/auth.js';
import validate from '../middlewares/validate.js';
import {
    signupValidation,
    loginValidation,
} from '../validations/authValidation.js';
const router = Router();

router.post('/signup', validate(signupValidation), signup);
router.post('/login', validate(loginValidation), login);


export default router;
