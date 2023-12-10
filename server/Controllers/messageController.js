
import messageModel from "../Models/messageModel.js"

//CreateMessage
//getMessage
export const createMessage = async(req, res) =>{

    const { chatId, senderId , text} = req.body;
    
    try{

        const message = new messageModel({
            chatId, senderId , text
        })
        const response = await message.save();
        res.status(200).json(response);
    }catch(error){
        res.status(500).json(error);
    }
}

export const getMessage = async(req, res) =>{
    try{
        const { chatId} = req.params;
        const messages = await messageModel.find({chatId})
        res.status(200).json(messages);
    }catch(error){

    }
}