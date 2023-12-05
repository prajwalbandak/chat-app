import { useState } from 'react'
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Chat from './pages/Chat';
import Register from './pages/Register';
import Login from './pages/Login';
import './index.css'
import Navbar from './components/Navbar';

function App() {

  return (
    <>

      <Navbar />
      <Routes>
        
        <Route path='/' element={<Chat />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    
    
  
     
    </>
  )
}

export default App
