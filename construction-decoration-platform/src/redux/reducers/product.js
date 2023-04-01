import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import productApi from "../../api/productApi";

export const productgetAll = createAsyncThunk(
  "product/productgetAll",
  async () => {
    const listproduct = await productApi.getAllFurniture();
    return listproduct;
  }
);
export const getproductForYou = createAsyncThunk(
  "product/productForYou",
  async (data) => {
    const { page, size } = data;
    console.log("size", size);
    const listproduct = await productApi.getForYou(page, size);
    return listproduct;
  }
);
export const productDetail = createAsyncThunk("product/detail", async (id) => {
  const productDetail = await productApi.getDetail(id);
  return productDetail;
});

export const getFavoriteProduct = createAsyncThunk("product/getFavoriteProduct", async () => {
  const res = await productApi.getLikeProduct();
  return res;
});

export const addFavoriteProduct = createAsyncThunk(
  "product/addFavoriteProduct", async (data, thunkApi) => {
    // console.log(data)
    const res = await productApi.onLike(data);
    if (res.status === 200) {
      thunkApi.dispatch(getFavoriteProduct())
    }
    return res;
  });

export const getBasicMaterials = createAsyncThunk("product/getBasicMaterials", async (id) => {
  const basicMaterials = await productApi.getBasicMaterials(id);
  console.log("basicMaterials",basicMaterials);
  return basicMaterials;
});

export const getAllBasicMaterials = createAsyncThunk("product/getAllBasicMaterials", async () => {
  const basicMaterials = await productApi.getAllBasicMaterials();
  return basicMaterials;
});


const productslide = createSlice({
  name: "product",
  initialState: {
    productlist: [],
    detail: {},
    loadingproduct: false,
    productForYou: [],
    listImageDetail: [],
    material: [],
    filter: "",
    // storeDetailId:0,
    total_page: 1,
    total_pageYou: 1,
    listFavoriteProduct: [],
    listMaterials: []
  },
  reducers: {
    // saveFilter: (state, action) => {
    //   state.filter = action.payload;
    // },
  },
  extraReducers: {
    [productgetAll.pending]: (state) => {
      state.loadingproduct = true;
    },
    [productgetAll.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [productgetAll.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      state.productlist = action.payload.data;
    },
    [getFavoriteProduct.pending]: (state) => {
      state.loadingproduct = true;
    },
    [getFavoriteProduct.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [getFavoriteProduct.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      state.listFavoriteProduct = action.payload.data;
    },
    [productDetail.pending]: (state) => {
      state.loadingproduct = true;
    },
    [productDetail.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [productDetail.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      state.detail = action.payload.data;
      state.listImageDetail = action.payload.data?.image_url
      state.storeDetailId = action.payload.data.store?.id
    },
    [getproductForYou.pending]: (state) => {
      state.loadingproduct = true;
    },
    [getproductForYou.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [getproductForYou.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      state.productForYou = action.payload.data.data;
      state.total_pageYou = action.payload.data.total_pages;
    },
    [getBasicMaterials.pending]: (state) => {
      state.loadingproduct = true;
    },
    [getBasicMaterials.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [getBasicMaterials.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      state.material = action.payload.data.data;
    },

    [getAllBasicMaterials.pending]: (state) => {
      state.loadingproduct = true;
    },
    [getAllBasicMaterials.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [getAllBasicMaterials.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      state.listMaterials = action.payload.data;
    },
  },
});

export default productslide;
