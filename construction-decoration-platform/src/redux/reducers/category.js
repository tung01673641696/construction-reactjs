import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import categoryApi from "../../api/categoryApi";

export const categorygetAll = createAsyncThunk(
  "category/categorygetAllAction",
  async () => {
    const listCategory = await categoryApi.getAll();
    return listCategory;
  }
);
export const listProductCategory = createAsyncThunk(
  "category/getListProductCate",
  async (data) => {
    const { id, page } = data;
    const listProduct = await categoryApi.getProduct(id, page);
    return listProduct;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categoryList: [],
    loading: false,
    categoryDetail: {},
    listproductCategory: [],
    total_pages: 1,
  },
  reducers: {
    // getAll: (state, action) => {
    //   state.categoryDetail = action.payload;
    // },
  },
  extraReducers: {
    [categorygetAll.pending]: (state, action) => {
      state.loading = true;
    },
    [categorygetAll.rejected]: (state, action) => {
      state.loading = false;
    },
    [categorygetAll.fulfilled]: (state, action) => {
      state.loading = false;
      state.categoryList = action.payload.data;
    },
    [listProductCategory.pending]: (state, action) => {
      state.loading = true;
    },
    [listProductCategory.rejected]: (state, action) => {
      state.loading = false;
    },
    [listProductCategory.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.listproductCategory = action.payload.data.data;
      state.total_pages = action.payload.data.total_pages;
    },
  },
});

export default categorySlice;
