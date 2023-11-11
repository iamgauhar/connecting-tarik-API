import { Router } from 'express';
import { createCrousel, getCrousels } from '../controllers/crousel.js';

const router = Router();

router.route('/').post(createCrousel).get(getCrousels);

export default router;
