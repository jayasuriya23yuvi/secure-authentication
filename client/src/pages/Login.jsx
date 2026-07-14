import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate} from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useContext } from 'react'



const Login = () => {

  const navigate= useNavigate()
  //const {backendUrl,setIsloggedin}=useNavigate(AppContext)
  const {backendUrl,setIsLoggedin,getUserData}=useContext(AppContext)


  const [state,setState]= useState('Sign Up')
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

 const onSubmitHandler=async (e)=>{
  try {
    e.preventDefault();
    axios.defaults.withCredentials=true
    if (state==='SignUp'){
       const {data}= await axios.post(backendUrl + '/api/auth/register',{name,email,password})
       if (data.success){
        setIsLoggedin(true)
        getUserData()
        navigate('/')
       }
       else{
        //alert(data.message)
        toast.error(data.message)
       }
    }else{
       const {data}= await axios.post(backendUrl + '/api/auth/login',{email,password})
       if (data.success){
        setIsLoggedin(true)
        getUserData()
        navigate('/')
       }
       else{
        //alert(data.message)
        toast.error(data.message)
       }

    }
    
  } catch (error) {
    toast.error(error.message)
  }

 }




  return (
    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-purple-500 to-emerald-500'>
      
       <img onClick={()=>navigate('/')} src={assets.logo} alt="" className='absolute left-5 sm:left-20 top-5 w-14 sm:w-16 cursor-pointer'></img>
       <div className='bg-slate-800 p-10 rounded-4xl shadow-lg w-full sm:w-96 text-indigo-30 text-sm'>
        
        
        <h2 className='text-3xl font-semibold text-white text-center mb-3'>{state==='Sign Up'?'Create account ':'login '}</h2>
       <p className='text-center text-white text-sm mb-6'>{state==='Sign Up'?'Create your account ':'login to your account !'}</p>


       <form onSubmit={onSubmitHandler}>
        
        <div className="flex flex-col gap-2">
{state==='Sign Up'&& (<div className='flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
         <img src={assets.person1} alt="" className="w-5 h-5"/>
        <input onChange={e =>setName(e.target.value)} value={name} 
        className ='bg-transparent outline-none' type="text" placeholder='Full Name'   required />
        </div>)}
        
        

        <div onChange={e =>setEmail(e.target.value)} value={email} 
        className='flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
         <img src={assets.maillogo} alt="" className="w-5 h-5"/>
        <input  className ='bg-transparent outline-none' type="email" placeholder='Email ID'   required />
        </div>

        <div className='flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
         <img src={assets.lock} alt="" className="w-5 h-5"/>
        <input onChange={e =>setPassword(e.target.value)} value={password} 
         className ='bg-transparent outline-none' type="password" placeholder='Password'   required />
        </div>

          <p onClick={()=>navigate('/reset-password')} className='text-indigo-500 mb-4 cursor-pointer'>Forgot password?</p>



        

        
      <button className="text-white font-medium rounded-full w-full py-2.5 bg-gradient-to-r from-pink-400 to-purple-600">
  {state}
</button>
      </div>
        
        </form>

        {state === 'Sign Up' ? (<p className='text-gray-500 text-s mt-4 text-center'>Already have an account?{'  '}
  <span onClick={()=>setState('Login')} className='text-blue-400 cursor-point underline'>Login here</span>
</p>)
:
<p className='text-gray-500 text-s mt-4 text-center'>Don't have an account?{'  '}
  <span onClick={()=>setState('Sign Up')} className='text-blue-400 cursor-point underline    '>Sign up</span>
</p>
}

</div>


       </div>
   
  )
}

export default Login

// <div className="flex flex-col items-center justify-center min-h-screen"></div>
// className="flex flex-col items-center justify-center min-h-screen"
//<img src={assets.person1} alt="" className="w-10 h-10"/>

//<button className='text-white font-medium rounded-full w-full py-2.5 bg-gradient-to-r from bg-emerald-200 to bg-indigo-800'>{state}</button>





