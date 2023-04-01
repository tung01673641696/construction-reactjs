import { createSlice } from "@reduxjs/toolkit";
import searchApi from "../../api/searchApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getListProduct = createAsyncThunk(
  "search/getListProduct",
  async (data) => {
    // const { page, size, desc, name } = data;
    const { name } = data;
    const listProduct = await searchApi.filter(name);

    if (listProduct.status === 200) {
      return listProduct;
    }
  }
);
const searchSlice = createSlice({
  name: "search",
  initialState: {
    name: "test",
    productList: [],
    loadingproduct: false,
    total_page: 1,
  },
  reducers: {
    setValueSearch: (state, action) => {
      state.name = action.payload;
    },
    setListProduct: (state, action) => {
      state.productList = action.payload;
    },
  },
  extraReducers: {
    [getListProduct.pending]: (state) => {
      state.loadingproduct = true;
    },
    [getListProduct.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [getListProduct.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      if (!action.payload) {
        state.productList = [];
      } else {
        state.productList = action.payload?.data?.data;
        state.total_page = action.payload?.data?.total_pages;
      }
    },
  },
});
export const { setValueSearch, setListProduct } = searchSlice.actions;
export default searchSlice;
