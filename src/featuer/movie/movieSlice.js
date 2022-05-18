import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieApiKey";

export const fetchAsynkMovies = createAsyncThunk(
  "movies/fetchAsynkMovies",
  async () => {
    try {
      const seriesText = "Harry";
      const { data } = await movieApi.get(
        `?apiKey=${APIKey}&s=${seriesText}&type=series`
      );
      return data;
    } catch (error) {
      console.lof(error.response);
    }
  }
);

const initialState = {
  data: {},
  loading: false,
  isSuccess: false,
  massage: "",
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducer: {},
  extraReducers: {
    [fetchAsynkMovies.loading]: (state) => {
      state.loading = true;
    },
    [fetchAsynkMovies.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [fetchAsynkMovies.rejected]: (state, { payload }) => {
      state.massage = "failed";
    },
  },
});

export default movieSlice.reducer;
export const getMovies = (state) => state.movies.data;
