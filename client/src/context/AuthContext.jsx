import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const[user, setUser] = useState("")
   
    const [registerInfo, setRegisterInfo] = useState({
       name:"",
        email:"",
        password:"",
    })
    return (
        <AuthContext.Provider 
        value={ {
            user ,
            registerInfo,
            setRegisterInfo
            
            }}>
            {children}
        </AuthContext.Provider>
    )
}