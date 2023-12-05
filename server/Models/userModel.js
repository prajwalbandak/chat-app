import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name : { type:String, required:true,  minlength:3, maxlength:30},
    email :{
        type : String,
        required:true,
        minlength:3,
        maxlength:200,
        unique:true,
    },
    password:{type:String, required:true, minlength:3, maxlength:1024},
},
        {
            timestamps:true
        }
)

const userModel = model("User", userSchema);

export default userModel;