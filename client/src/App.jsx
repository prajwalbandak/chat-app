import { useContext, useState } from 'react'
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Chat from './pages/Chat';
import Register from './pages/Register';
import Login from './pages/Login';
import './index.css'
import Navbar from './components/Navbar';
import { AuthContext } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';

function App() {
const { user} = useContext(AuthContext);
console.log("user Details in the user" + JSON.stringify(user));
  return (
    <>
    <ChatContextProvider  user={user}>

      <Navbar />
      <Routes>
        
        <Route path='/' element={ user ? < Chat /> : <Login />} />
        <Route path='/register' element={ user ? < Chat /> : <Register/>} />
        <Route path='/login' element={ user ? < Chat /> : <Login />} />
      </Routes>
    
    
  
      </ChatContextProvider>
    </>
  )
}

export default App
