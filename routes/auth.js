import { Router } from 'express';
import { getUsers, newUser } from '../controllers/auth.js';

const router = Router();

router.post('/new', newUser);
router.get('/all', getUsers);

export default router;
