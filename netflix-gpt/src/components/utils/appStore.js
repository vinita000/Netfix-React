import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import MoviesSlice from "./moviesSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";

const appStore = configureStore(
  {
    reducer: {
      user: userSlice,
      movies: MoviesSlice,
      gpt: gptSlice,
      config: configSlice
    },
  }
)

export default appStore;