import { createContext, useCallback, useState } from "react";
import { baseURL, postRequest } from "../utils/service";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const[user, setUser] = useState(null)
    const[registerError, setRegisterError] = useState(null);
    const[isRegisterLoading, setIsRegisterLoading] = useState(false);
    const [registerInfo, setRegisterInfo] = useState({
        name:"",
        email:"",
        password:"",
    })

    const registerUser = useCallback(async(e) => {
        console.log("the request data for register user" + registerInfo)
        e.preventDefault();
        setIsRegisterLoading(true);
        setRegisterError(null)
        const response  = await postRequest(
            `${baseURL}/user/register`,
            JSON.stringify(registerInfo)
        );
        console.log("response" + response);
        if(response.error) {
            return setRegisterError(response);
        }
        localStorage.setItem("User", JSON.stringify(response));
        setUser(response);
        console.log("response" + response);
        setIsRegisterLoading(false);
    },[registerInfo])

    return (
        <AuthContext.Provider 
        value={ {
            user ,
            registerInfo,
            setRegisterInfo,
            registerError,
            registerUser,
            isRegisterLoading
            
            }}>
            {children}
        </AuthContext.Provider>
    )
}