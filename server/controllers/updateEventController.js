import eventModel from "../models/event-model.js";
import { validationResult } from "express-validator";

const updateEventController = async (req,res,next)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({message:"Validation error",errors:errors.array()});
        }
        const {title,description,location,date,time,imageUrl,status} = req.body;
        const event = await eventModel.findByIdAndUpdate(req.params.id,{title,description,location,date,time,imageUrl,status},{new:true});
        res.status(200).json({message:"Event updated successfully",event});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}


export default updateEventController;
