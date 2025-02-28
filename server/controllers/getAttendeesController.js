import eventModel from "../models/event-model.js";

const getAttendeesController = async (req,res,next)=>{
    try {
        const event = await eventModel.findById(req.params.id).populate("attendees");
        if(!event){
            return res.status(404).json({message:"Event not found"});
        }
        res.status(200).json({event});

        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}

export default getAttendeesController;
