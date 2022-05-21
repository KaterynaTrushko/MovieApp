import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../movie/movieSlice";
import showsReducer from "../movie/showsSlice";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    shows: showsReducer,
  },
});

export default store;
