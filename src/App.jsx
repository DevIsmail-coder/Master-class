import { useState } from 'react'
import './App.css'
import checkOnline from './hooks/useCheckData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import VerifyPage from './pages/VerifyPage/VerifyPage'
import toast, { Toaster } from 'react-hot-toast'
import Dashboard from './pages/Dashboard/Dashboard'
import Trash from './pages/Trash/Trash'



function App() {
  const isOnline = checkOnline()
  
  return (

    <div>
      {/* {
        !isOnline && toast.error("sorry you are offline")
      } */}
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/user/verify-email' element={<VerifyPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/Trash:user' element={<Trash />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>

  )
}

export default App
