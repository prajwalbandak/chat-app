import { createContext, useEffect, useState } from "react";
import { baseURL, postRequest, getRequest } from "../utils/service";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user}) =>{

    const[userChats, setUserChats] = useState(null);
    const[isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    const[userChatsError , setUserChatsError] = useState(null);

    useEffect(() =>{
        const getUserChats = async () =>{
            if(user?._id){
                setIsUserChatsLoading(true);
                setUserChatsError(null);
                const response = await getRequest(`${baseURL}/chats/${user?._id}`);
                setIsUserChatsLoading(false);

                if(response.error){
                    setUserChatsError(response);
                }
                setUserChats(response);
            }
        }
    })

    return <ChatContext.Provider value={
       { userChats, 
        setUserChats
    ,isUserChatsLoading, 
    setIsUserChatsLoading,
    userChatsError , setUserChatsError}
    }
    >
        {children}
    </ChatContext.Provider>
}