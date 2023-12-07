import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


const Register = () => {
  const {  user ,
    registerInfo,
    setRegisterInfo,
    registerError,
    registerUser,
    isRegisterLoading } = useContext(AuthContext);

  const handleChange = (e) =>{
    
    setRegisterInfo({
      ...registerInfo, 
      [e.target.id] : e.target.value})

      
  }
  //console.log("register error " + JSON.stringify(registerError.message));
  console.log("register info " + JSON.stringify(registerInfo));
  console.log("isRegister Loading " + isRegisterLoading);
  // if(isRegisterLoading){
  //   return (
  //     <SkeletonCard />
  //   )
  // }
  return (
    <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md ">
     
      
        <div className="bg-white shadow-md rounded-lg p-6">

            <img className="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />
         
           
            <h2 className="my-3 text-center text-3xl font-bold  text-gray-900">
                Sign up for an account
            </h2>
            


            <form className="space-y-6" onSubmit= {registerUser }>

                <div>
                    <h3>Username</h3>
                    <div className="mt-1">
                        <input onChange={handleChange} id="name" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <h3>Email</h3>
                    <div className="mt-1">
                        <input onChange={handleChange} id="email"  required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <h3>Password</h3>
                    <div className="mt-1">
                        <input onChange={handleChange} id="password" type="password" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

               

                <div>
                    <button type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none  ">
                        { isRegisterLoading ? "Creating your account" : "Register"}
                        </button>
                </div>
                { registerError  && (

<div id="alert-additional-content-2" className="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
<div className="flex items-center">
  <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span className="sr-only">Info</span>
  <h3 className="text-lg font-medium">{registerError.message}</h3>
</div>

</div>
                )
              

              }
            </form>
        </div>
    </div>
</div>    

  )
}

const SkeletonCard = () => {
  return (
    <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md ">
        <div className="bg-white shadow-md rounded-lg p-6 animate-pulse">
          <div className="mx-auto h-12 w-auto bg-gray-300 rounded-full"></div>
          <div className="my-3 bg-gray-300 h-6 w-2/3 mx-auto rounded-full"></div>
          <div className="space-y-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-gray-300 h-6 w-full rounded-md"></div>
            ))}
            <div className="flex w-full justify-center">
              <div className="bg-sky-400 h-12 w-2/3 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register