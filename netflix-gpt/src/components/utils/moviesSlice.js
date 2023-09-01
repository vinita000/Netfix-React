import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
      nowPlayingMovies: null,
      trailerVideo: null, 
      popularMovies: null,
      trendingMovies: null,
      upcomingMovies: null
    },
    reducers: {
      addNowPlayingMovies: (state, action) => {
        state.nowPlayingMovies = action.payload;
      },
      addTrailerVideo: (state, action) => {
        state.trailerVideo = action.payload;
      },
      addPopularMovies: (state, action) => {
        state.popularMovies = action.payload;
      },
      addTrendingMovies: (state, action) => {
        state.trendingMovies = action.payload;
      },
      addUpcomingMovies: (state, action) => {
        state.upcomingMovies = action.payload;
      },
    }
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTrendingMovies, addUpcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer

//here my objective is when user sing in/sign up jsut add that user to redux store and when user sign out remove user from store