import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../components/Button';
import { signUp } from '../services/operations/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
      } = useForm();

      const password = watch("password");
      const confirmPassword = watch("confirmPassword");
  return (
    <div className='w-svw h-svh flex flex-col justify-start items-center gap-20'>
        <p className='text-5xl mt-20'>SignUp Form</p>
      <form  
      className='flex flex-col w-80 h-full justify-start items-center gap-5 '
      onSubmit={handleSubmit((data) => dispatch(signUp(data,navigate)))}>
      <input
      type='text'
       className='border w-full h-14 p-2 text-xl'
       placeholder='Fullname'
      {...register('name')} />
      <input
       className='border w-full h-14 p-2 text-xl'
       type='email'
          name="password"
        placeholder='Enter your email id'
      {...register('email', { required: true })} />
      {errors.email && <p className='text-red-500'>email is required.</p>}
      <input 
         type='password'
       className='border w-full h-14 p-2 text-xl'
        placeholder='password'
      {...register('password', { required: true })} />
      {errors.password && <p className='text-red-500'>Password is required.</p>}
      <input 
       className='border w-full h-14 p-2 text-xl'
       type='password'
         name="confirmPassword"
        placeholder='Confirm Password'
      {...register('confirmPassword', { required: true })} />
      {(errors.confirmPassword || confirmPassword !== password) && (
    <p className='text-red-500'>Confirm password is required and must match.</p>
  )}

      <button 
    className='w-2/3 h-16 text-xl bg-yellow-300 rounded-lg'
  
    >SignUp</button>
      </form>
    
    </div>
  )
}

export default SignUpPage
