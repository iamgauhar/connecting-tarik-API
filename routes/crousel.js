import { Router } from 'express';
import { createCrousel, getCrousels } from '../controllers/crousel.js';

const router = Router();

router.post("/post", createCrousel)
router.get("/get", getCrousels)

export default router;
