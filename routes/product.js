import { Router } from 'express';
import {
    allProduct,
    createProduct,
    deleteProduct,
    getProduct,
    updateProduct,
} from '../controllers/product.js';
const router = Router();

router.post('/add', createProduct);
router.get('/all', allProduct);
router.get('/get/:productId', getProduct);
router.patch('/update/:productId', updateProduct);
router.delete('/delete/:productId', deleteProduct);

export default router;
