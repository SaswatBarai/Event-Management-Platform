import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:8,
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user",
    },
    savedEvents:[{
        type:Schema.Types.ObjectId,
        ref:"event",
    }],
    createdEvents:[{
        type:Schema.Types.ObjectId,
        ref:"event",
    }],
    rsvps: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "event",
      }],
},{timestamps:true})

const user = mongoose.model("user",userSchema);

export default user;
