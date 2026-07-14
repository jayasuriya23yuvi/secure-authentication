import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/header'

const Home = () => {
  return (
    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-purple-500 to-emerald-500'
     >
      <Navbar/>
      <Header/>
    </div>
  )
}

export default Home
//className='flex flex-col items-center justify-center min-h-screen bg-[url("/bgimg.avif")]'>
 //className='flex flex-col items-center justify-center min-h-screen bg-[url("/bgimg.avif")] bg-cover bg-center'