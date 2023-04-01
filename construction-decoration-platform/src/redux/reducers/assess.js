import assessApi from "../../api/assessApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const getassessProduct = createAsyncThunk(
  "assess/assessgetProduct",
  async (data) => {
    const { pageCommentProduct, size, id } = data;
    // console.log(size)
    const listAssess = await assessApi.getList(pageCommentProduct, size, id);
    return listAssess;
  }
);

export const getassessRating = createAsyncThunk(
  "assess/assessRating",
  async (id) => {
    const rating = await assessApi.getRating(id);
    return rating;
  }
);

const assessSlice = createSlice({
  name: "assess",
  initialState: {
    listAssess: [],
    ratingProduct: {},
    loadingproduct:false,
    total_page:1,
  },
  reducers: {},
  extraReducers: {
    [getassessProduct.pending]: (state) => {
      state.loadingproduct = true;
    },
    [getassessProduct.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [getassessProduct.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      state.listAssess = action.payload.data.data;
      state.total_page = action.payload.data.total_pages;
    },
    [getassessRating.pending]: (state) => {
      state.loadingproduct = true;
    },
    [getassessRating.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [getassessRating.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      state.ratingProduct = action.payload.data;
      // state.total_page = action.payload.data.total_pages;
    },
  },
});

export default assessSlice;
