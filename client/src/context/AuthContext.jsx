import { createContext, useCallback, useEffect, useState } from "react";
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
    //Get the user getails from localStorage:
    useEffect(() =>{
        const user = localStorage.getItem("User");
        setUser(JSON.parse(user));
    },[])

    const registerUser = useCallback(async(e) => {
        console.log("the request data for register user" + JSON.stringify(registerInfo));
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

    const logOutUser = useCallback( () =>{
        localStorage.removeItem("User");
        setUser(null);
    })
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