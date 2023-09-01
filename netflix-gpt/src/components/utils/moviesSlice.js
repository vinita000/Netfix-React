import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
      nowPlayingMovies: null,
      trailerVideo: null
    },
    reducers: {
      addNowPlayingMovies: (state, action) => {
        state.nowPlayingMovies = action.payload;
      },
      addTrailerVideo: (state, action) => {
        state.trailerVideo = action.payload;
      }
    }
})

export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer

//here my objective is when user sing in/sign up jsut add that user to redux store and when user sign out remove user from store