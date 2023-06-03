import Gig from '../modules/gigModel.js';
import createError from '../utils/createError.js';


export const createGig = async (req,res,next) =>{
if(!req.isSeller){
    return next(createError(403,'You must be a seller'));
}
const newGig = new Gig({
    userId: req.userId,
    ...req.body,

})

try {
    const savedGig =  await newGig.save();
    res.status(201).send(savedGig);
} catch (error) {
    next(createError(404,error))
}
}


export const deleteGig = async (req,res,next) =>{
    try {
        const gig = await Gig.findById(req.params.id);
        if (gig.userId !== req.userId)
          return next(createError(403, "You can delete only your gig!"));
    
        await Gig.findByIdAndDelete(req.params.id);
        res.status(200).send("Gig has been deleted!");
      } catch (err) {
        next(err);
      }
}


export const getGig = async (req,res,next) =>{
    try {
        const gig = await Gig.findById(req.params.id);
        if (!gig) next(createError(404, "Gig not found!"));
        res.status(200).send(gig);
      } catch (err) {
        next(err);
      }
}



export const getGigs = async (req,res,next) =>{
const q = res.query;
//  const filters ={
  //  ...(q.cat && { cat: q.cat }),
  //  ...((q.min || q.max) && {
  //    price: {
   //     ...(q.min && { $gt: q.min }),
   //     ...(q.max && { $lt: q.max }),
   //   },
  //  }),
 //   ...(q.search && { title: { $regex: q.search, $options: "i" } }),
//  };
   try {
    const gigs = await Gig.find();
    res.status(200).send(gigs);
   } catch (error) {
    next(error)
   }

}