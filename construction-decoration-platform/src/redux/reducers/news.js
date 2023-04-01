import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { toast } from "react-toastify";
import newsApi from "../../api/newsApi";

export const  listNews = createAsyncThunk("news/getlistNews", async (data) => {
  const { page, size } = data;
  const listNews = await newsApi.getList(page, size);
  console.log('listNews', listNews);
  return listNews;
});

export const listAllNews = createAsyncThunk("news/listAllNews", async () => {
  const res = await newsApi.getAllDetail();
  console.log('res News', res);
  return res;
});

// export const getAlllistNews = createAsyncThunk("news/getlistNews", async (data) => {
//   const { page, size } = data;
//   const listNews = await newsApi.getList(page, size);
//   return listNews;
// });

export const newsDetail = createAsyncThunk("news/getdetailNews", async (id) => {
  const newsDetail = await newsApi.getDetail(id);
  return newsDetail;
});

export const deleteNews = createAsyncThunk("news/deleteNews",
  async (id, thunkApi) => {
    const newsDetail = await newsApi.delete(id);

    if (newsDetail.status === 200) {
      toast.success('Xóa tin tức thành công')
      thunkApi.dispatch(listNews())
    } else {
      toast.error('Xóa tin tức không thành công')
    }

    return newsDetail
  });

export const addNews = createAsyncThunk(
  "news/addNews",
  async (data) => {
    const postNews = await newsApi.storeCreateNews(data);
  }
)

export const getCategoryNews = createAsyncThunk("news/categoryNews", async () => {
  const categoryNews = await newsApi.getCategoriesNews();

  return categoryNews.data;
}
)

export const updateNews = createAsyncThunk(
  "news/updateNews",
  async (data) => {
    const updateNews = await newsApi.updateNews(data);

    return updateNews;
  }
)

const newSlice = createSlice({
  name: "news",
  initialState: {
    listNew: [],
    categoryNews: [],
    detailNews: {},
    loadingproduct: false,
    loadingNews: false,
    total_page: 1,
  },
  reducers: {},
  extraReducers: {
    [listNews.pending]: (state) => {
      state.loadingproduct = true;
    },
    [listNews.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [listNews.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      state.listNew = action.payload.data;
      state.total_page = action.payload.data.total_pages;
    },
    [newsDetail.pending]: (state) => {
      state.loadingproduct = true;
    },
    [newsDetail.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [newsDetail.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      state.detailNews = action.payload.data;
      // state.total_page = action.payload.data.total_pages;
    },

    [getCategoryNews.pending]: (state) => {
      state.loadingNews = true;
    },
    [getCategoryNews.rejected]: (state) => {
      state.loadingNews = false;
    },
    [getCategoryNews.fulfilled]: (state, action) => {
      state.loadingNews = false;
      state.categoryNews = action.payload
    },


    [addNews.pending]: (state) => {
      state.loadingNews = true;
    },
    [addNews.rejected]: (state) => {
      state.loadingNews = false;
    },
    [addNews.fulfilled]: (state, action) => {
      state.loadingNews = false;

    },
  },
});

export default newSlice;
