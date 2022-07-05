import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieApiKey";

export const fetchAsynkShows = createAsyncThunk(
  "movies/fetchAsynkShows",
  async (seriesText) => {
    try {
      const { data } = await movieApi.get(
        `?apiKey=${APIKey}&s=${seriesText}&type=series`
      );
      return data;
    } catch (error) {
      console.log(error.response);
    }
  }
);

const initialState = {
  data: {},
  loading: false,
  isSuccess: false,
};

export const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducer: {},
  extraReducers: {
    [fetchAsynkShows.loading]: (state) => {
      state.loading = true;
      console.log("loading");
    },
    [fetchAsynkShows.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      console.log(payload);
      state.isSuccess = true;
    },
    [fetchAsynkShows.rejected]: (state, { payload }) => {
      state.massage = "failed";
      console.log("failed");
    },
  },
});

export default showsSlice.reducer;
export const getShows = (state) => state.shows.data;
