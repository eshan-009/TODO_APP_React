import axios from "axios";
import { todoEndPoints } from "../apis";
import { apiConnector } from "../apiconnector";
import toast from "react-hot-toast";
import { getTodo } from "./todos";
import { setLoader } from "../../redux/slices/loader";

const { CREATETODO } = todoEndPoints;

export const createTodo = (title, description, dueDate, navigate) => {
  if (!title || !description || !dueDate) {
    toast.error("Fill all fields");
    return;
  }
  return async (dispatch) => {
    try {
        dispatch(setLoader(true))
        const toastId = toast.loading("Creating Todo")
      const token = localStorage.getItem("token");
      const body = {
        title: title,
        description: description,
        dueDate: dueDate,
      };
      const response = await apiConnector("POST", CREATETODO, body, {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      });

      if (response.status == 200) {
        toast.dismiss(toastId)
        toast.success("Todo created");
       
        await dispatch(getTodo());
        dispatch(setLoader(false))
        navigate("/homescreen/upcoming");
      } else {
        toast.dismiss(toastId)
        toast.error("Error creating Todo");
      }
      dispatch(setLoader(false))
      return;
    } catch (err) {
      console.log(err);
      toast.error("Error creating Todo");
    }
  };
};
