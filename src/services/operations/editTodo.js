import { useSelector } from "react-redux";
import { apiConnector } from "../apiconnector";
import { todoEndPoints } from "../apis";
import toast from "react-hot-toast";


const {EDITTODO} = todoEndPoints;

export const editTodo = (title,description,dueDate,id,navigate)=>{
    if(!title || !description || !dueDate)
        {
            toast.error("Fill all fields");
            return
        }
   
    return async() => {
        try{
            const token = localStorage.getItem("token")
    // console.log(id)
        const newURL = `${EDITTODO}/${id}`
        // console.log("PAThhh",EDITTODO,"LOPPP",newURL)
       const response = await apiConnector("PUT",newURL,{
        title:title,
        description:description,
        dueDate:dueDate
       },{
        "Content-type": "application/json; charset=UTF-8",
        "Authorization" : `Bearer ${token}`
    })
    toast.success("Todo Edited successfully");
 
    navigate("/homescreen/upcoming");
        }
        catch (err){
            toast.error("Error Editing Todo")
        }
  

    }
    
}