import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
  }


  export const loggedIn = createSlice({
    name: 'Login',
    initialState,
    reducers : {
        login : (state,action)=>{
            state.value = action.payload
        },

        
    }
  })

  export const {login} =loggedIn.actions

  export default loggedIn.reducer