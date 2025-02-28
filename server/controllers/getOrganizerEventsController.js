import eventModel from "../models/event-model.js";

const getOrganizerEventsController = async (req,res,next)=>{
    try {
        const events = await eventModel.find({organizerId:req.user.userId});
        if(!events){
            return res.status(404).json({message:"Events not found"});
        }
        res.status(200).json({events});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}

export default getOrganizerEventsController;
