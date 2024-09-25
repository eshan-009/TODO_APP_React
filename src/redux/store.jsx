import { configureStore } from '@reduxjs/toolkit'
import loggedIn  from './slices/loggedIn'
import todoSlice  from './slices/todoSlice'
import  selectedTodo  from './slices/selectedTodo'
import  loaderSlice  from './slices/loader'

export const store = configureStore({
    reducer: {
        Login : loggedIn,
        Todos : todoSlice,
        Selected : selectedTodo,
        loader : loaderSlice
    },
  })