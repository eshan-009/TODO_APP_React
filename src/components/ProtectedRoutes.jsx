import React, { useEffect } from 'react'
import LoginPage from '../Pages/LoginPage';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
  
    const navigate = useNavigate()
    const dispatch = useDispatch();
    

   
  

  
       const token = localStorage.getItem("token");
       const isLoggedIn = useSelector((state)=>state.Login.value)
 
    if(token)
        {
           return children;
        }
        else{
            return <LoginPage></LoginPage>
        }
   
}

export default ProtectedRoutes
