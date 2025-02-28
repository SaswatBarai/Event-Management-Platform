import EventModel from "../models/event-model.js";

const getEventsController = async (req,res,next)=>{

    try {
        const events = await EventModel.find(req.params.id);
        if(!events){
            return res.status(404).json({message:"Event not found"});
        }
        res.status(200).json({events});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}   

export default getEventsController;
