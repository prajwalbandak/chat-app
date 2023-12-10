import chatModel from "../Models/chatModel.js";

//CreateUser
//getUserChats
//findChat

export const createChat = async(req, res) =>{
    const { firstId, secondId} = req.body;

    try{
        const chat = await chatModel.findOne({
            members: { $all :[firstId. secondId]}
        })
        if(chat) {
            console.log("chat is already exit " + JSON.stringify(chat));
            return res.status(200).json(chat);

        }
        const newChat = new chatModel({
            members:[firstId, secondId]
        });

        const response = await newChat.save();
        console.log("NEW chat  " + JSON.stringify(chat));
        res.status(200).json(response);


    }catch(error){
        res.status(500).json(error);
    }
}

export const findUserChats = async(req, res) =>{
    const userId = req.params.userId;
    console.log("USED ID" + userId);
    try{
        const chats = await chatModel.find({
            members : {$in: userId}
        })
        console.log("Chats for userId" + chats)
    res.status(200).json(chats);


    }catch(error){
        res.status(500).json(error);
    }
}

export const findChat  = async(req, res) =>{
    const {firstId, secondId } = req.params;
    console.log("firstID and secondID" + firstId)
 
    try{
        const chat = await chatModel.findOne({
            members: { $all :[firstId. secondId]} }
        )

        res.status(200).json(chat);
    }catch(error){
        res.status(500).json(error);
    }

}

