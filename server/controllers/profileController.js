import userModel from "../models/user.model.js"



const profileController = async (req,res,next)=>{
    try {
        const user = await userModel.findById(req.user.userId);
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json({message:"Profile fetched successfully",user});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});

    }
}
const updateProfileController = async (req,res,next)=>{
    try {
        const user = await userModel.findById(req.user.userId);
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        user.name = req.body.name;
        user.email = req.body.email;
        await user.save();
        res.status(200).json({message:"Profile updated successfully",user});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}

export {profileController,updateProfileController};