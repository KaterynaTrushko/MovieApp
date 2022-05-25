import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieApiKey";

export const controller = new AbortController();

export const fetchAsynkDetails = createAsyncThunk(
  "showsDitails/fetchAsynkDetails",
  async (id) => {
    try {
      const { data } = await movieApi.get(
        `?apiKey=${APIKey}&i=${id}&Plot=full`,
        { signal: controller.signal }
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
};

export const showsDetailsSlice = createSlice({
  name: "showsDitails",
  initialState,
  reducer: {
    remuveMovieOrShow: (state) => {
      state = initialState;
    },
  },
  extraReducers: {
    [fetchAsynkDetails.loading]: (state) => {
      state.loading = true;
      console.log("loading");
    },
    [fetchAsynkDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
      console.log(payload);
    },
    [fetchAsynkDetails.rejected]: (state, { payload }) => {
      state.massage = "failed";
      console.log("failed");
    },
  },
});

export default showsDetailsSlice.reducer;
export const getDetails = (state) => state.ditails.data;
export const { remuveMovieOrShow } = showsDetailsSlice.actions;
