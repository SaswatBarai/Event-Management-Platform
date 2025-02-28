import eventModel from "../models/event-model.js";

const getUpcomingEventsController = async (req,res,next)=>{
    try {
        const events = await eventModel.find({status:"upcoming"});
        if(!events){
            return res.status(404).json({message:"No upcoming events found"});
        }
        res.status(200).json({events});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}

export default getUpcomingEventsController;
