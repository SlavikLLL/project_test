import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
import userRoute from './routes/userRoute.js';
import reviewRoute from './routes/reviewRoute.js';
import orderRoute from './routes/orderRoute.js';
import messageRoute from './routes/messageRoute.js';
import gigRoute from './routes/gigRoute.js';
import converRoute from './routes/converRoute.js';
import authRoute from './routes/authRoute.js';
import cookieParser from 'cookie-parser';
const app = express();
dotenv.config()
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:"http://localhost:3000",credentials:true}));

app.use('/server/users', userRoute);
app.use('/server/review', reviewRoute);
app.use('/server/order', orderRoute);
app.use('/server/message', messageRoute);
app.use('/server/gigs', gigRoute);
app.use('/server/conver', converRoute);
app.use('/server/auth', authRoute);


app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "something went wrong";

    return res.status(errorStatus).send(errorMessage);

})

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('db connected');
    } catch (error) {
        console.log(error);
    }
}
app.listen(8800, ()=>{
    connect()
    console.log('server started');
})