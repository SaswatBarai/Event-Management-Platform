import userModel from "../models/user.model.js";
import {validationResult} from "express-validator";
import bcrypt from "bcrypt";
const register = async (req,res,next)=>{
    try 
    {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({message:"Validation error",errors:errors.array()});
        }
        const {name,email,password} = req.body;

        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }
        else{
            const hashPassword = await bcrypt.hash(password,10);
            const newUser = await userModel.create({name,email,password:hashPassword});
            res.status(201).json({message:"User created successfully",user:newUser});
            next();
        }
        
        
    } catch (error) {
        res.status(500).json({message:"Internal server error",error:error.message});
        
    }
}

export default register;
