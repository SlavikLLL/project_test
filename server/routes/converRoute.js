import { verifyToken } from '../middleware/jwt.js';
import { getConver,createConver,getSingleConver,updateConver } from '../controllers/converController.js';
import express from 'express';


const router = express.Router();


router.get('/', verifyToken,getConver);
router.post('/', verifyToken,createConver);
router.get('/single/:id', verifyToken,getSingleConver);
router.put('/:id', verifyToken,updateConver);

export default router;