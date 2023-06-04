import express from 'express';
import { createOrder, getOrders } from '../controllers/orderController.js';
import { verifyToken } from '../middleware/jwt.js';



const router = express.Router();


router.post('/test',verifyToken,createOrder);
router.get('/test',verifyToken, getOrders);

export default router;