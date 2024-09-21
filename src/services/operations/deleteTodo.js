import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { todoEndPoints } from "../apis";

const {DELETETODO} = todoEndPoints;

export const deleteTodo =(id) =>{

    
    // console.log(id)
    return async() => {
        try{
            const token = localStorage.getItem("token")
        // console.log("link",`${DELETETODO}/${id}`);

        const response = await apiConnector("DELETE",`${DELETETODO}/${id}`,{},{
            "Content-type": "application/json; charset=UTF-8",
            "Authorization" : `Bearer ${token}`
        })

     toast.success("Todo Deleted Successfully")
        }
        catch (err){
            toast.error("Error Deleting Todo")
        }
    }
}