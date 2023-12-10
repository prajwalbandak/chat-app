import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    chatId:String, //retrive the message for particular id
    senderId:String,
    text:String
},
{
    timestamps:true
}
)

const messageModel = model("Message", messageSchema);

export default messageModel;