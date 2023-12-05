import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
    </div>
 
    </header>
    
  )
}

export default Navbar