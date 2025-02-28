import eventModel from "../models/event-model.js";

const deleteEventController = async (req,res,next)=>{
    try {
        const event = await eventModel.findByIdAndDelete(req.params.id);
        if(!event){
            return res.status(404).json({message:"Event not found"});
        }
        res.status(200).json({message:"Event deleted successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}

export default deleteEventController;

