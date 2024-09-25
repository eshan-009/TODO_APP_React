import { useSelector } from "react-redux";
import { apiConnector } from "../apiconnector";
import { todoEndPoints } from "../apis";
import toast from "react-hot-toast";
import { editTodoRedux } from "../../redux/slices/todoSlice";
import { setLoader } from "../../redux/slices/loader";


const {EDITTODO} = todoEndPoints;

export const editTodo = (title,description,dueDate,id,navigate)=>{
    if(!title || !description || !dueDate)
        {
            toast.error("Fill all fields");
            return
        }
   const body ={
 
    title:title,
        description:description,
        dueDate:dueDate
   }
   
    return async(dispatch) => {
        dispatch(setLoader(true))
        const toastId = toast.loading("Editing Todo")
        try{
           
            const token = localStorage.getItem("token")
    // console.log(id)
        const newURL = `${EDITTODO}/${id}`
        // console.log("PAThhh",EDITTODO,"LOPPP",newURL)
       const response = await apiConnector("PUT",newURL,body,{
        "Content-type": "application/json; charset=UTF-8",
        "Authorization" : `Bearer ${token}`
    })

    if(response.status==200)
    {
        toast.dismiss(toastId)
       
        toast.success("Todo Edited successfully");
        body.id=id
    dispatch(editTodoRedux(body))
    dispatch(setLoader(false))
    navigate("/homescreen/upcoming");
    }

    dispatch(setLoader(false))
        }
        catch (err){
            console.log(err)
            toast.dismiss(toastId)
            toast.error("Error Editing Todo")
        }
  

    }
    
}