import React from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { setId } from '../redux/slices/selectedTodo'
import { useNavigate } from 'react-router-dom'
import { deleteTodo } from '../services/operations/deleteTodo'
import { updateTodoStatus } from '../services/operations/updateTodoStatus'
import toast from 'react-hot-toast'


const Card = ({data}) => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

   async function EditHandler(e,id,title,description,dueDate){
    e.preventDefault()
     dispatch(setId({id,title,description,dueDate}))
     navigate("/homescreen/editTodo")

 
   }
    async function DeleteHandler(e,id){
    e.preventDefault()

     dispatch(deleteTodo(id,navigate))
    
  
 
   }
  async function CompletedHandler(e,id){
    e.preventDefault()
    
    await dispatch(updateTodoStatus(id))
    await navigate(location.pathname)
   
   }

  return (
    <div className=' border border-black  w-96 h-56 m-2 flex flex-col p-3 justify-between '>
   <div className='flex flex-col gap-4 text-xl'>
   <p><b>Title :-</b>{data.title}</p>
      <p><b>Description :-</b>{data.description}</p>
      <p><b>Due Date :-</b>{data.dueDate.split("T")[0]}</p>
   </div>

      <div className='flex gap-2 justify-center'>
        <Button
        clickHandler={(e)=>EditHandler(e,data._id,data.title,data.description,data.dueDate)}
         buttonText={"Edit"}/>
        <Button
         clickHandler={(e)=>DeleteHandler(e,data._id)}
         buttonText={"Delete"}/>
        <Button
         clickHandler={(e)=>CompletedHandler(e,data._id)}
        buttonText={`${data.completed? "Completed" : "Pending"}`}/>
      </div>
    </div>
  )
}

export default Card
