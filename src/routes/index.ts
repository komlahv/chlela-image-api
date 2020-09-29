import { Router } from 'express';
import ImageRouter from './Images';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/images', ImageRouter);

// Export the base-router
export default router;
