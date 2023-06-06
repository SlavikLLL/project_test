
import Message from '../modules/messageModel.js';
import Conver from '../modules/converModel.js';


export const createMessage = async (req, res, next) => {
    const newMessage = new Message({
      conversationId: req.body.conversationId,
      userId: req.userId,
      desc: req.body.desc,
    });
    try {
      const savedMessage = await newMessage.save();
      await Conver.findOneAndUpdate(
        { id: req.body.conversationId },
        {
          $set: {
            readBySeller: req.isSeller,
            readByBuyer: !req.isSeller,
            lastMessage: req.body.desc,
          },
        },
        { new: true }
      );
  
      res.status(201).send(savedMessage);
    } catch (err) {
      next(err);
    }
  };
export const getMessage = async (req,res,next ) =>{
    try {
         const messages = await Message.find({ conversationId: req.params.id });
    res.status(200).send(messages);
    } catch (error) {
        next(error)
    }
}
