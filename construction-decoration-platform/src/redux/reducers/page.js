import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    pageSale: 1,
    pageDay: 1,
    pageYou: 1,
    pageCommentProduct: 1,
    pageNews:1,
  },
  reducers: {
    setDecreaseSale: (state, action) => {
      state.pageSale = state.pageSale - 1;
    },
    setIncreaseSale: (state, action) => {
      state.pageSale = state.pageSale + 1;
    },
    setDecreaseDay: (state, action) => {
      state.pageDay--;
    },
    setIncreaseDay: (state, action) => {
      state.pageDay++;
    },
    setDecreaseYou: (state, action) => {
      state.pageYou--;
    },
    setIncreaseYou: (state, action) => {
      state.pageYou++;
    },
    setDecreaseAssessProduct: (state, action) => {
      state.pageCommentProduct--;
    },
    setIncreaseAssessProduct: (state, action) => {
      state.pageCommentProduct = action.payload
    },
    setDecreaseNews: (state, action) => {
      state.pageNews--;
    },
    setIncreaseNews: (state, action) => {
      state.pageNews++;
    },
  },
});

export const {
  setDecreaseSale,
  setIncreaseSale,
  setDecreaseDay,
  setIncreaseDay,
  setIncreaseYou,
  setDecreaseNews,
  setIncreaseNews,
  setDecreaseAssessProduct,
  setIncreaseAssessProduct,
  setDecreaseYou,
} = pageSlice.actions;

export default pageSlice;
