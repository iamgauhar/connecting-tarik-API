import { Router } from 'express';
import {
    signup,
    login,
    forgotPassword,
    resetPassword,
    getUser
} from '../controllers/auth.js';
import validate from '../middlewares/validate.js';
import {
    signupValidation,
    loginValidation,
} from '../validations/authValidation.js';
import verifyToken from '../middlewares/auth.js'

const router = Router();

router.post('/signup', validate(signupValidation), signup);
router.post('/login', validate(loginValidation), login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:userId/:token', resetPassword);
router.get('/user', verifyToken, getUser)


export default router;
