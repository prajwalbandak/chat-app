import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'

const Login = () => {
    const {
        logOutUser,logInUser,setLoginInfo,
            loginError,loginInfo,isLoginLoading,
            updateLoginInfo,
    } = useContext(AuthContext);
    const handleChange = (e) =>{
    
        setLoginInfo({
          ...loginInfo, 
          [e.target.id] : e.target.value})
    
          
      }
     // console.log("loginError " + JSON.stringify(loginError.message))
    console.log("LOGIN INFO IN THE LOGIN TAB/FILE" + JSON.stringify(loginInfo));
  return (
    <div className="mx-auto w-full max-w-md bg-while px-6 pt-10 pb-10 shadow-xl rounded-lg sm:rounded-xl sm:px-10">
    
    <div className="text-center ">
        <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
        <p className="mt-2 text-gray-500">Sign in below to access your account</p>
    </div>
    <div className="mt-5">
        <form onSubmit={logInUser}>
            
                    <h3>Email</h3>
                    <div className="">
                        <input onChange={handleChange} id="email"  required  placeholder='Enter your name'
                            className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    </div>
              

                     <div>
                    <h3 className='mt-1'>Password</h3>
                    <div className="mt-1">
                        <input onChange={handleChange} id="password" type="password" required
                           className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    </div>
                </div>
                <div className="my-6">
                    <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign in</button>
                </div>

           
            <p className="text-center text-sm mt-3 text-gray-500">Don&#x27;t have an account yet?
                <Link to="/register"
                    className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">
                        { isLoginLoading ? "Getting you in " : "Sign up " } 
                </Link>
            </p>
            { loginError && (
                <div className="mt-3 bg-red-100 border border-red-700 text-black-700 px-4 py-3 rounded-lg relative" role="alert">
                <strong className="font-bold">Holy smokes! </strong>
                <span className="block sm:inline">{loginError.message}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
              </div>
            )}
        </form>
    </div>

</div>
  )
}

export default Login