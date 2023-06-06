import express from 'express';
import { getOrders,intent } from '../controllers/orderController.js';
import { verifyToken } from '../middleware/jwt.js';



const router = express.Router();


//router.post('/',verifyToken,createOrder);
router.get('/',verifyToken, getOrders);
router.post('/create-payment-intent',verifyToken,intent )

export default router;