import React, { useEffect } from 'react'
import LoginPage from '../Pages/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from '../services/operations/auth';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
  
    const navigate = useNavigate()
    const dispatch = useDispatch();
    

   
  

    useEffect(()=>{
        const token = localStorage.getItem("token");

     dispatch(authenticate(token,navigate))
       },[])

       const isLoggedIn = useSelector((state)=>state.Login.value)
 
    if(isLoggedIn)
        {
           return children;
        }
        else{
            return <LoginPage></LoginPage>
        }
   
}

export default ProtectedRoutes
