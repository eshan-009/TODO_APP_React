import React, { memo, useState } from 'react'

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Login } from '../services/operations/auth';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
const[input,setInput] =useState({email:"",password:""})

const dispatch = useDispatch();
const navigate = useNavigate()

function handleOnchange(e){
   const {name,value} = e.target
    setInput((prev)=>( {
            ...prev,
            [name] :value
        }

    ))
}
function submitHandler(e){
    e.preventDefault()
    dispatch(Login(input.email,input.password,navigate))
}
  return (
<div className='w-svw h-svh flex flex-col justify-start items-center gap-20'>
<p className='text-5xl mt-28'>Login Page</p>
<form className='flex flex-col w-80 h-full justify-start items-center gap-5 ' onSubmit={(e)=>submitHandler(e)}>
    <input
    className='border w-full h-14 p-2 text-xl'
    placeholder='Enter your Email'
    type='email'
    value={input.email}
    name='email'
    onChange={(e)=>handleOnchange(e)}
    />


    <input
  className='border w-full h-14 p-2 text-xl'
  placeholder='Enter your password'
    type='password'
    value={input.password}
    name='password'
    onChange={(e)=>handleOnchange(e)}
    />

<p onClick={()=>navigate("/signup")} className='text-blue-400'>Create Account</p>

    <button 
    className='w-2/3 h-16 text-xl bg-yellow-300 rounded-lg'
  
    >Login</button>
</form>

</div>

  )
}

export default LoginPage
