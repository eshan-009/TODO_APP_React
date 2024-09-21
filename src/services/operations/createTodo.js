import axios from "axios";
import { todoEndPoints } from "../apis";
import { apiConnector } from "../apiconnector";
import toast from "react-hot-toast";

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
        const response = apiConnector("POST",CREATETODO,{
            title:title,
            description:description,
            dueDate:dueDate
        },{
            "Content-type": "application/json; charset=UTF-8",
            "Authorization" : `Bearer ${token}`
        })
      
        toast.success("Todo created")
        navigate("/homescreen/upcoming")
       }
       catch (err){
        toast.error("Error creating Todo")
       }

    }
}

