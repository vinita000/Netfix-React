import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import MoviesSlice from "./moviesSlice";

const appStore = configureStore(
  {
    reducer: {
      user: userSlice,
      movies: MoviesSlice
    },
  }
)

export default appStore;