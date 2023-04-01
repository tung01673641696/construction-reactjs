import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import commentApi from "../../api/commentApi";

export const getCommentNews = createAsyncThunk(
  "comment/commentDetailProduct",
  async (data) => {
    const { id, page, size } = data;
    const commentDetailProduct = await commentApi.getNews(id, page, size);
    return commentDetailProduct;
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    listCommentNews: [],
    pageCommentProduct: 1,
    loadingproduct: false,
    total_page: 0,
  },
  reducers: {},
  extraReducers: {
    [getCommentNews.pending]: (state) => {
      state.loadingproduct = true;
    },
    [getCommentNews.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [getCommentNews.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      state.listCommentNews = action.payload.data.data;
      state.total_page = action.payload.data.total_pages;
    },
  },
});

export default commentSlice