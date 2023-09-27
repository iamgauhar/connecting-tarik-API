import { Router } from 'express';
import { allProduct, createProduct } from '../controllers/product.js';
const router = Router();

router.post('/add', createProduct);
router.get('/all', allProduct);

export default router;
