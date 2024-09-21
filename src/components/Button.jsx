import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({buttonText,clickHandler}) => {

  
  return (
    <div>
      <button
       className={`bg-yellow-300 flex justify-center items-center px-2 py-1 ${buttonText=="Add Todo"? "w-32 h-14 rounded-sm":""} ${buttonText=="LogOut"? "rounded-lg":""}`}
  
       onClick={clickHandler}
       >{buttonText}</button>
    </div>
  )
}

export default Button
