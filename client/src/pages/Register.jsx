import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Register = () => {
  const { user, registerInfo, setRegisterInfo } = useContext(AuthContext);

  const handleChange = (e) =>{
    
    setRegisterInfo({
      ...registerInfo, 
      [e.target.name] : e.target.value})

      
  }
  console.log("register info " + JSON.stringify(registerInfo));
  return (
    <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md ">
     
      
        <div className="bg-white shadow-md rounded-lg p-6">

            <img className="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />
         
           
            <h2 className="my-3 text-center text-3xl font-bold  text-gray-900">
                Sign up for an account
            </h2>
            


            <form className="space-y-6" >

                <div>
                    <label  className="block text-sm font-medium text-gray-700">Username</label>
                    <div className="mt-1">
                        <input onChange={(e) => setRegisterInfo({...registerInfo, name:e.target.value})} name="username" type="username" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label  className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1">
                        <input onChange={handleChange} name="email" type="email-address" autocomplete="email-address" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="mt-1">
                        <input onChange={handleChange} name="password" type="password" autocomplete="password" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label  className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <div className="mt-1">
                        <input onChange={handleChange} name="confirm_password" type="password" autocomplete="confirm-password" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <button type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none  ">
                          Register
                        Account
                        </button>
                </div>
            </form>
        </div>
    </div>
</div>    

  )
}

export default Register