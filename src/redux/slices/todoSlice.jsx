import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";



export const todoSlice = createSlice({
    name : "Todos",
    initialState : [],
    reducers : {
        fetchTodos : (state,action)=>{
          return action.payload
        },
        addTodo : (state,action)=>{
      
          state.push(action.payload);
        },
        deleteTodoRedux : (state,action)=>{
         const found = state.find((item)=>item._id===action.payload)
        
         if(found)
         {
          const index = state.indexOf(found);
          state.splice(index,1)
         }
        },
        editTodoRedux: (state,action)=>{
       
         if(found)
         {
          const index = state.indexOf(found);
          state[index].title = action.payload.title
          state[index].description = action.payload.description
          state[index].dueDate = action.payload.dueDate
      
         }
        
        },
        updateTodostatusRedux : (state,action)=>{

          const found = state.find((item)=>item._id===action.payload)

          if(found)
            {
             const index = state.indexOf(found);
             state[index].completed =true
            }
           
        }
    }
})

export const {fetchTodos,addTodo,deleteTodoRedux,editTodoRedux,updateTodostatusRedux} = todoSlice.actions;
export default todoSlice.reducer