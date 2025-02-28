import eventModel from "../models/event-model.js";
import userModel from "../models/user.model.js";

const getPastEventsController = async (req,res,next)=>{
    try {
        const user = await userModel.findById(req.user.userId).populate("rsvps");
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        const pastEvents = user.rsvps.filter(event=>event.status==="past");
        if(!pastEvents){
            return res.status(404).json({message:"No past events found"});
        }
        res.status(200).json({pastEvents});

        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}

export default getPastEventsController;
