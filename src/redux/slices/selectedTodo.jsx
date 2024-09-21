import { createSlice } from "@reduxjs/toolkit";

export const selectedTodo = createSlice({
    name :"Selected",
    initialState : {
        id : null,
        title : null,
        description : null,
        dueDate : null
    },
    reducers :{
        setId : (state,action)=>{
      
            return action.payload;
        }
    }
})

export const {setId} = selectedTodo.actions
export default selectedTodo.reducer