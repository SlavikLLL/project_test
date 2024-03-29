import User from '../modules/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import createError from '../utils/createError.js';
export const register = async (req,res,next) =>{
    try {
        const hash =  await bcrypt.hash(req.body.password,10)
        const newUser = new User({
            ...req.body,
            password:hash,
            
        })

        await newUser.save();
        res.status(201).send('user created');
        
    } catch (error) {
        next(error)
        }

}

//login
export const login = async (req,res,next) =>{
    try {
        const user = await User.findOne({username:req.body.username});
        if(!user) return next(createError(404,'User not founded'));

        const isCorrect = await bcrypt.compare(req.body.password,user.password);
        if(!isCorrect) return next(createError(404,'Wrong name or password'));

        const token = jwt.sign({
            id:user._id,
            isSeller:user.isSeller,
        },process.env.JWT_KEY)
        const {password, ...info} = user._doc

        res.cookie('accessToken',token,{
            httpOnly:true
        }).status(200).send(info)

    } catch (error) {
        next(error)
    }
}


//logout

export const logout = async (req,res) =>{
    res.clearCookie("accessToken",{
        sameSite:"none",
        secure:true,

    }).status(200).send('User has been logout')
}