import { Router } from 'express';
import {
    signup,
    login,
    forgotPassword,
    resetPassword,
} from '../controllers/auth.js';
import validate from '../middlewares/validate.js';
import {
    signupValidation,
    loginValidation,
} from '../validations/authValidation.js';
const router = Router();

router.post('/signup', validate(signupValidation), signup);
router.post('/login', validate(loginValidation), login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:userId/:token', resetPassword);


export default router;
