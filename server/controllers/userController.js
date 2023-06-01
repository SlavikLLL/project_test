import User from "../modules/userModel.js"
import createError from '../utils/createError.js';

export const deleteUser = async (req,res,next) =>{
try {
    const user = await User.findById(req.params.id)
       if(req.userId !== user._id.toString()) {
       return next(createError(303,'You can delete only your account'));
      }
       await User.findByIdAndDelete(req.params.id);
       res.status(200).send("account deleted")
    
} catch (error) {
    res.status(500).send(error)
}

}