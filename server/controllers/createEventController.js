import EventModel from '../models/event-model.js';  
import userModel from "../models/user.model.js";
import {validationResult} from "express-validator";

const createEventController = async (req,res,next)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({message:"Validation error",errors:errors.array()});
        }       

        const {title,description,location,date,time,imageUrl,capacity,isPublic,status} = req.body;
        const organizer = await userModel.findById(req.user.userId);
        if(!organizer){
            return res.status(404).json({message:"Organizer not found"});
        }
        organizer.createdEvents.push(event._id);
        await organizer.save();
        
        const event = await EventModel.create({title,description,location,date,time,imageUrl,capacity,isPublic,status,organizer:req.user.userId});

        res.status(201).json({message:"Event created successfully",event});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}

export default createEventController;
