import axios from "axios";
import { todoEndPoints } from "../apis";
import { apiConnector } from "../apiconnector";
import toast from "react-hot-toast";
import { addTodo } from "../../redux/slices/todoSlice";

const {CREATETODO} = todoEndPoints;

export const createTodo = (title,description,dueDate,navigate)=>{

    if(!title || !description || !dueDate)
    {
        toast.error("Fill all fields");
        return
    }
    return async(dispatch)=>{
       try{
        const token = localStorage.getItem("token")
        const body = {
            title:title,
            description:description,
            dueDate:dueDate
        }
        const response = await apiConnector("POST",CREATETODO,body,{
            "Content-type": "application/json; charset=UTF-8",
            "Authorization" : `Bearer ${token}`
        })
      
        if(response.status==200)
        {
            toast.success("Todo created")
            dispatch(addTodo(body))
            navigate("/homescreen/upcoming")
            
        }
      
       }
       catch (err){
        console.log(err)
        toast.error("Error creating Todo")
       }

    }
}

