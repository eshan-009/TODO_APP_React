import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";



export const todoSlice = createSlice({
    name : "Todos",
    initialState : [],
    reducers : {
        fetchTodos : (state,action)=>{
            
          return action.payload
          
        
            
        }
    }
})

export const {fetchTodos} = todoSlice.actions;
export default todoSlice.reducer