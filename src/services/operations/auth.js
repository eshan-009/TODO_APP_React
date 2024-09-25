
import toast from "react-hot-toast"
import { login } from "../../redux/slices/loggedIn"
import { apiConnector } from "../apiconnector"
import { authEndPoints } from "../apis"
import { setLoader } from "../../redux/slices/loader"

const {LOGIN,AUTHH,SIGNUP} = authEndPoints
export const Login = (email,password,navigate,setLoader)=>{
  
return async(dispatch)=>{
   
  try{
    dispatch(setLoader(true))
    const toastId = toast.loading("Logging in...")
    
   
    const response = await apiConnector("POST",LOGIN,{
        email : email,
     
        password: password
    }

    );
        localStorage.setItem("token",response.data.token);

        toast.dismiss(toastId);
        if(response.data.token)
        {
       
            dispatch(login(true))
            navigate("/homescreen")
           dispatch(setLoader(false))
            toast.success("Logged IN")
        }
        else
        {
            toast.error("Try Again")
        }
       
  } catch (err){
    console.error(err);
    console.log("Error Logging in");
    toast.error("Error Logging in");
   
  }

}

 
}



export const signUp = (data,navigate)=>{
   
    if(!data.name || !data.email || !data.password)
    {
        toast.error("Fill All fields");
        return
    }
    return async(dispatch)=>{
        dispatch(setLoader(true))
        const toastId = toast.loading("Signing Up....")
       try{
        const token = localStorage.getItem("token")
        const response = await apiConnector("POST",SIGNUP,{
            userName : data.name,
            email : data.email,
            password : data.password

        },{
            "Content-type": "application/json; charset=UTF-8",
            "Authorization" : `Bearer ${token}`
        })
        if(response.status== 200)
        {
            dispatch(setLoader(false))
            toast.dismiss(toastId)
            toast.success("Sign up Successful")
            navigate("/")
        }
        else
        {
            toast.dismiss(toastId)   
            toast.error("Could not sign up!!! Try Again");
        }
        toast.dismiss(toastId)
        dispatch(setLoader(false))
       
       } catch (err){
        toast.dismiss(toastId)
        console.log("Error signing up",err);
        toast.error("Error signing up");
       }
    }
}