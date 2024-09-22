import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { todoEndPoints } from "../apis";
import { deleteTodoRedux } from "../../redux/slices/todoSlice";

const {DELETETODO} = todoEndPoints;

export const deleteTodo =(id,navigate) =>{

    
    // console.log(id)
    return async(dispatch) => {
        try{
            const token = localStorage.getItem("token")
        // console.log("link",`${DELETETODO}/${id}`);

        const response = await apiConnector("DELETE",`${DELETETODO}/${id}`,{},{
            "Content-type": "application/json; charset=UTF-8",
            "Authorization" : `Bearer ${token}`
        })

    if(response.status==200)
    {
        toast.success("Todo Deleted Successfully");
        dispatch(deleteTodoRedux(id))
        navigate(`${location.pathname}`);
       
        return
    }
 
        }
        catch (err){
            console.log(err)
            toast.error("Error Deleting Todo")
        }
    }
}