import {
    allCategory,
    createCategory,
    getCategoryById,
    getCategoryByName,
} from '../controllers/category.js';
import { Router } from 'express';

const router = Router();

router.post('/add', createCategory);
router.get('/all', allCategory);
router.get('/:categoryId', getCategoryById);
router.get('/', getCategoryByName);

export default router;
