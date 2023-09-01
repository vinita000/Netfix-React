import { createSlice } from "@reduxjs/toolkit";

const trailerSlice = createSlice({
    name: 'trailer',
    initialState: {
      nowPlayingMovies: null
    },
    reducers: {
      addNowPlayingMovies: (state, action) => {
        state.nowPlayingMovies = action.payload;
      }
    }
})

export const { addNowPlayingMovies } = trailerSlice.actions;
export default trailerSlice.reducer

//here my objective is when user sing in/sign up jsut add that user to redux store and when user sign out remove user from store