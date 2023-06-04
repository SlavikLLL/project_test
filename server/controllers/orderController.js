import Order from '../modules/orderModel.js'
import Gig from '../modules/gigModel.js'
export const createOrder = async (req,res,next) =>{
    try {
        const gig = Gig.findById(req.params.gigId)
        const newOrder = new Order({
            gigId: gig._id,
            img: gig.cover,
            title: gig.title,
            buyerId: req.userId,
            sellerId: gig.userId,
            price: gig.price,
            payment_intent:"temporary"
        })
        await newOrder.save();
        res.status(201).send(newOrder)
    } catch (error) {
        next(error)
    }
}
export const getOrders = async (req,res,next) =>{
    
    try {
        const orders = await Order.find({
            ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
            isCompleted: true,


        })
    } catch (error) {
        next(error)
    }
}