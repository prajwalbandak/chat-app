import userModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";


export const createToken = ( _id) =>{
    const jwtkey = "dkhfbsigub";
    return jwt.sign({_id}, jwtkey, {expiresIn:"3d"});
}
 export const registerUser = async(req, res ) =>{
    console.log("req body" + JSON.stringify(req.body));
    try{
        const { name, email , password } = req.body;
        
    let user = await userModel.findOne({email});

    if(user) return res.status(400).json("user with given email already exist..");

    if(!name || !email || !password){
        return res.status(400).json("All field are required");
    }
   
    user = new userModel({name, email, password});

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
    const token = createToken(user._id);
    res.status(200).json({email, user, token});
    }catch(error){
        console.log("error  " + error.message);
        res.status(500).json(error);
    }

 }

 export const loginUser = async(req , res) =>{
    const { email, password }  = req.body;
    try{
        let user = await userModel.findOne({email});
        if(!user) return res.status(400).json("invalid email and password");

        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword){
            return res.status(401).json("unauthorized");
        }
        const token = createToken(user._id);
        res.status(200).json({_id:user._id, name:user.name, email, token});
    }catch(error){
        console.log("error " + error);
    }
 }
 
 export const findUser = async(req, res) =>{
    const userId = req.params.userId;

    try{
        const user = await userModel.findById(userId);
        if(!user){
            return res.status(400).json("user not found");
        }
        return res.status(200).json(user);

    }catch(error){
        console.log("error" + error);
    }
 }

 export const userList = async(req, res) =>{
    try{
        const userList = await userModel.find();
        return res.status(200).status(userList);
    }catch(error){
        console.log("error" + error.message);
    }
 }


 