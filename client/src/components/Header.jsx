import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
//import lottie from 'lottie-react'
import Lottie from "lottie-react";
import animationData from "../assets/Brainstorms.json";
const Header = () => {

const {userData}=useContext(AppContext)

  return (
    <div className='flex flex-col items-center mt-20 px-4 text-center text-gray-800'>
      
       <div className='w-60 h-60 mb-1'>
      
       <Lottie animationData={animationData} loop={true} />
    </div>
    <h1 className='flex items-center gap-1 text-xl sm:text-3xl font-medium mb-2'>Hey  {userData ? userData.name : 'Developer' }!    
        
   <img src={assets.handwave} alt="wave" className="w-10 h-10" />
</h1>
    <h2 className='text-3xl sm:text-5xl font-semibold mb-4'>Welcome to our Website</h2>
    <p className='mb-8 max-w-md'>Lets start with a quick product tour and we will have you up and running in no time!</p>
    <button className='border border-gray-500 rounded-full px-8 py-2.5 hover:bg-gray-200 transition-all'>Get Started</button>
    </div>
  )
}

export default Header
//<img src={assets.handwave} alt="" className='w-8 aspect-square'/>
//<img src={assets.robo1} alt="" className='w-60 h-60 rounded-full mb-1'/>
// <Lottie path="/Brainstorms.json" loop={true} /> 
//<Lottie animationData={require("/Brainstorm.json")} loop={true} />