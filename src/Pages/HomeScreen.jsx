import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import TodayTodos from './Todos/TodoyTodos'
import TodoyTodos from './Todos/TodoyTodos'
import { useDispatch, useSelector } from 'react-redux'
import { getTodo } from '../services/operations/todos'
import { fetchTodos } from '../redux/slices/todoSlice'
import Button from '../components/Button'
import { login } from '../redux/slices/loggedIn'
import toast from 'react-hot-toast'

const HomeScreen = () => {
  
const dispatch = useDispatch();
const navigate = useNavigate();

function navigationHandler(){
    navigate('/homescreen/createTodo')
}
useEffect(()=>{
  dispatch(getTodo())
},[])
function logoutHandler(){
  localStorage.clear();
  dispatch(login(false))
  toast.success("Logged Out");
  navigate("/", { replace: true });
}

  return (
    <div className='flex flex-col items-center mt-9 font-geostatic'>
      <h1 className='text-3xl font-bold'>My Tasks</h1>
      <ul className='flex justify-evenly w-full mt-11 mb-8 sm:text-lg text-sm  '>
     <Link to={`/homescreen` }  className={`${location.pathname===`/homescreen` ? " font-bold scale-150 text-[#2F1847]": ""}`}>Today</Link>
     <Link to={`/homescreen/upcoming`} className={`${location.pathname===`/homescreen/upcoming` ? "font-bold scale-150 text-[#2F1847]": ""}`}>Upcoming</Link>
     <Link to={`/homescreen/completed`} className={`${location.pathname===`/homescreen/completed` ? "font-bold scale-150 text-[#2F1847]": ""}`}>Completed</Link>
     <Link to={{ pathname: '/homescreen/pending', state: { reload: Date.now() } }} className={`${location.pathname === `/homescreen/pending` ? "font-bold scale-150 text-[#2F1847]": ""}`}>Pending</Link>
      </ul>
{
  

<Outlet></Outlet>


}
<div className='fixed bottom-10 right-10' >
<Button
clickHandler ={navigationHandler}
buttonText={'Add Todo'}
/>
</div>

<div className='fixed top-10 right-10'>
<Button
clickHandler={logoutHandler}
buttonText={'LogOut'}
/>
</div>
    </div>
  )
}

export default HomeScreen
