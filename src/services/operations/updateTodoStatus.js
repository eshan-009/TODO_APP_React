import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { todoEndPoints } from "../apis";
import { updateTodostatusRedux } from "../../redux/slices/todoSlice";
import { setLoader } from "../../redux/slices/loader";

const {UPDATESTATUS} = todoEndPoints;

export const updateTodoStatus = (id,navigate)=>{
    return async(dispatch) => {
        dispatch(setLoader(true))
        const toastId = toast.loading("Updating Todo status")
        try{
            const token = localStorage.getItem("token")
        const response = await apiConnector("PATCH",`${UPDATESTATUS}/${id}`,{
            completed :true
        },{
            "Content-type": "application/json; charset=UTF-8",
            "Authorization" : `Bearer ${token}`
        })
        if(response.status==200)
        {
            toast.dismiss(toastId)
            toast.success("Todo status updated successfully")
            dispatch(setLoader(false))
            dispatch(updateTodostatusRedux(id))
        }
        else
        {
            toast.dismiss(toastId)
         
            toast.error("Error updating Todo Status");
        }
        dispatch(setLoader(false))
        }
        catch (err){
            console.log(err)
            toast.dismiss(toastId)
            toast.error("Error Updating completed status")
        }
     
    }
}