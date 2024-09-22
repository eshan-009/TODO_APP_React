import axios from "axios";
import { apiConnector } from "../apiconnector";
import { todoEndPoints } from "../apis";
import { fetchTodos } from "../../redux/slices/todoSlice";
import toast from "react-hot-toast";

const {GETTODO} = todoEndPoints

export const getTodo = ()=>{
    return async(dispatch)=>{
        try{
            const toastId = toast.loading("Getting Todos")
            const response = await apiConnector("GET",GETTODO);

      if(response.status==200)
      {
         dispatch(fetchTodos(response.data.data))
     
        toast.dismiss(toastId);
      }
           
         return response.data.data
        }
        catch (err){
            toast.error("Error getting Todos")
        }
    }
}