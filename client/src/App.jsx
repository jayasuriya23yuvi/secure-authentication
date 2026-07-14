/*import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'



const App = () => {
  return (
    <div className='text-4xl'>
      <Routes>
        <Route path ='/' element={Home}/>
        <Route path ='/Login' element={Login}/>
        <Route path='/EmailVerify' element={EmailVerify}/>
        <Route path='/ResetPassword' element={ResetPassword}/>

      </Routes>
      
    
    </div>
  )
}

export default App
*/
import React from 'react';
import {Routes,Route} from 'react-router-dom'

import Home from "./pages/home";
import Login from './pages/login';
import EmailVerify from './pages/emailVerify';
import ResetPassword from './pages/resetPassword';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/email-verify' element={<EmailVerify/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
      </Routes>
      
    </div>
  )
}

export default App
