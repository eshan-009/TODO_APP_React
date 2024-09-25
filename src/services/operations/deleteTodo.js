import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { todoEndPoints } from "../apis";
import { deleteTodoRedux } from "../../redux/slices/todoSlice";
import { setLoader } from "../../redux/slices/loader";

const {DELETETODO} = todoEndPoints;

export const deleteTodo =(id,navigate) =>{

    
    // console.log(id)
    return async(dispatch) => {
        dispatch(setLoader(true))
        const toastId = toast.loading("Deleting Todo")
        try{
            const token = localStorage.getItem("token")
        // console.log("link",`${DELETETODO}/${id}`);

        const response = await apiConnector("DELETE",`${DELETETODO}/${id}`,{},{
            "Content-type": "application/json; charset=UTF-8",
            "Authorization" : `Bearer ${token}`
        })

    if(response.status==200)
    {
        toast.dismiss(toastId)
        dispatch(setLoader(false))
        toast.success("Todo Deleted Successfully");
        dispatch(deleteTodoRedux(id))
        dispatch(setLoader(false))
        navigate(`${location.pathname}`);
       
        return
    }
 
        }
        catch (err){
            console.log(err)
            toast.dismiss(toastId)
            toast.error("Error Deleting Todo")
        }
    }
}