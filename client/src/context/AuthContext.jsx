import { createContext, useCallback, useEffect, useState } from "react";
import { baseURL, postRequest } from "../utils/service";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const[user, setUser] = useState(null)
    const[registerError, setRegisterError] = useState(null);
    const[isRegisterLoading, setIsRegisterLoading] = useState(false);
    const[loginError, setLoginError] = useState(null);
    const[isLoginLoading, setIsLoginLoading] = useState(false);
    const [registerInfo, setRegisterInfo] = useState({
        name:"",
        email:"",
        password:"",
    })
    const[loginInfo, setLoginInfo] = useState({
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
    },[])
    //we can directly the pass the setRegisterInfo in context 
    //or we can use the function , In that updated set state.

    // const updateLoginInfo = useCallback((info) =>{
    //     setLoginInfo(info);

    // })

    const logInUser = useCallback(async(e) =>{
        e.preventDefault();
        e.preventDefault();
        console.log("the loginfo for user/login API " + JSON.stringify(loginInfo))
        setIsLoginLoading(true);
        setLoginError(null);
        const response  = await postRequest(
            `${baseURL}/user/login`,
            JSON.stringify(loginInfo)
        );
        console.log("the response of login" + JSON.stringify(response));
        if(response.error){
            console.log("going inside th eerror function")
            setIsLoginLoading(false);
            return setLoginError(response); 
        }
      
        localStorage.setItem("User", JSON.stringify(response));
        setUser(response);
        setIsLoginLoading(true);
    }, [loginInfo])
    return (
        <AuthContext.Provider 
        value={ {
            user ,
            registerInfo,setRegisterInfo,
            registerError,registerUser,isRegisterLoading,
            
            //Related to loginContext 
            logOutUser,logInUser,setLoginInfo,
            loginError,loginInfo,isLoginLoading,
            
            
            
            }}>
            {children}
        </AuthContext.Provider>
    )
}