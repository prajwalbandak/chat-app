import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const { user, logOutUser} = useContext(AuthContext);
  const navigate = useNavigate();

// const logOutUser = (e) =>{
//   console.log("user" + localStorage.getItem("User"))
//   const LocalStrogeUser = localStorage.removeItem("User");
//   console.log("localStorage" + LocalStrogeUser);


//   navigate("/login")

// }
// const handleLogOut = () =>{
//   console.log("user" + localStorage.getItem("User"));
//   const LocalStrogeUser = localStorage.removeItem("User");
//   console.log("localStorage" + LocalStrogeUser);


//   navigate("/login")
// }
  return (
    <header className='flex p-3 justify-between items-center bg-slate-200 shadow-md pb-5'>
    <div className='flex justify-between items-center '>

   
    <Link to='/' >
        <h3 className='text-black text-2xl font-serif '>ChatApp</h3>
    </Link>
   
    </div>
    <div>
        <h2 className='text-green font-sans text-xl'>Looged in as charles</h2>
    </div>
    <div className='flex justify-between items-center '>

   {user  && (
       <Link to='/register'>
       <button onClick= {(e) => logOutUser }className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-5' >
           LogOut
               </button>
       </Link>
   )}
   {!user && (
    <>
      <Link to='/login'>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-5' >
          Login
              </button>
      </Link>
  
      <Link to='/register'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-5' >
          Register
              </button>
      </Link>
      </>
   )}
    
    </div>
 
    </header>
    
  )
}

export default Navbar