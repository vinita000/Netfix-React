import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
      addUser: (state, action) => {
        return action.payload // here action.payload update initial satate
      }, 
      removeUser: (state, action) => {
        return null // here action.payload update  satate to null
      }
    }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer

//here my objective is when user sing in/sign up jsut add that user to redux store and when user sign out remove user from store