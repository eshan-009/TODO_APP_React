import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { todoEndPoints } from "../apis";
import { updateTodostatusRedux } from "../../redux/slices/todoSlice";

const {UPDATESTATUS} = todoEndPoints;

export const updateTodoStatus = (id,navigate)=>{
    return async(dispatch) => {
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
            toast.success("Todo status updated successfully")
            dispatch(updateTodostatusRedux(id))
        }
        else
        {
            toast.error("Error updating Todo Status");
        }
        }
        catch (err){
            toast.error("Error Updating completed status")
        }
     
    }
}