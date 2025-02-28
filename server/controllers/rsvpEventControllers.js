import eventModel from "../models/event-model.js";
import userModel from "../models/user.model.js";

const rsvpEventController = async (req,res,next)=>{
    try {
        const event = await eventModel.findById(req.params.id);
        if(!event){
            return res.status(404).json({message:"Event not found"});
        }
        if(event.status !== "published"){
            return res.status(400).json({message:"Event is not published"});
        }
        if(event.rsvp.includes(req.user.id)){
            return res.status(400).json({message:"You have already RSVPed to this event"});
        }
        if(event.capacity <= event.rsvp.length){
            return res.status(400).json({message:"Event is full"});
        }
        event.attendees.push(req.user._id);
        user.rsvps.push(event._id);
        await event.save();
        await user.save();
        res.status(200).json({message:"RSVPed to event successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});

    }
}

export default rsvpEventController;

