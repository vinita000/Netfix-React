import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
      nowPlayingMovies: null
    },
    reducers: {
      addNowPlayingMovies: (state, action) => {
        state.nowPlayingMovies = action.payload;
      }
    }
})

export const { addNowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer

//here my objective is when user sing in/sign up jsut add that user to redux store and when user sign out remove user from store