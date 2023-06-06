import Conver from "../modules/converModel.js"
import createError from '../utils/createError.js';

export const getConver = async (req,res,next) =>{
 try {
    const convers = await Conver.find(req.isSeller ? {sellerId: req.userId}:{buyerId:req.userId});
    res.status(200).send(convers);
 } catch (error) {
    next(error)
 }
}

export const createConver = async (req,res,next) =>{
    const newConversation = new Conver({
        id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
        sellerId: req.isSeller ? req.userId : req.body.to,
        buyerId: req.isSeller ? req.body.to : req.userId,
        readBySeller: req.isSeller,
        readByBuyer: !req.isSeller,
      });
    
      try {
        const savedConversation = await newConversation.save();
        res.status(201).send(savedConversation);
      } catch (err) {
        next(err);
      }
}

export const getSingleConver = async (req,res,next) =>{
try {
    const conver = await Conver.findOne({id:req.params.id});
    res.status(200).send(conver)

} catch (error) {
    next(error)
}
}

export const updateConver = async (req,res,next) =>{
try {
    const updatedConver = await Conver.findOneAndUpdate({id:req.params.id},
        {
            $set:{
                readBySeller:req.isSeller,
                readByBuyer: !req.isSeller,
        
            }
        },{new:true});
        res.status(200).send(updatedConver)

} catch (error) {
    next(error)
}
}

