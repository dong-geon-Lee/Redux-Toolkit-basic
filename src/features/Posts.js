import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts", async ({ limit }) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
    .then((response) => response.data);
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: { list: [], status: null },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
    },
    [getPosts.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default postsSlice.reducer;
