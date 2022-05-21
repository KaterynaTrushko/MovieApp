import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../movie/movieSlice";
import showsReducer from "../movie/showsSlice";
import ShowsDetailsReducer from "./showMoviesShowsDetails";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    shows: showsReducer,
    ditails: ShowsDetailsReducer,
  },
});

export default store;
