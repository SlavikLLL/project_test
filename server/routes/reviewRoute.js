import express from 'express';
import { createReview, deleteReview, getReview } from '../controllers/reviewController.js';
import { verifyToken } from '../middleware/jwt.js';


const router = express.Router();


router.post('/',verifyToken,createReview);
router.post('/:id',getReview);
router.post('/',verifyToken,deleteReview);

export default router;