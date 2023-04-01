import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import cartApi from "../../api/cartApi";

export const getCartAll = createAsyncThunk("cart/getCartAll", async () => {
  const listCart = await cartApi.get();
  return listCart;
});

export const addToCart = createAsyncThunk("cart/addToCart", async (data) => {
  const productAdd = await cartApi.add(data);
  return productAdd;
});

export const removerCart = createAsyncThunk("cart/removeCart", async (data) => {
  const removeCart = await cartApi.remove(data);
  if (removeCart.status == 200) {
    return data;
  }
});

export const updateQuantity = createAsyncThunk(
  "cart/updateCart",
  async (data) => {
    const update = await cartApi.updateQuantity(data.quantity, data.id);
    if (update.status === 200) {
      return data;
    }
  }
);

function filtProducts(products=[], id){
  var result = products.filter(product=>{
      if(product.id_order_detail != id){
          return true;
      }else {
          return false
      }
  });
  if(result.length == 0){
      return null;
  }else {
      return result;
  }
}

function filterData(data, _product){
  var result=[]
  console.log("data", data);
  data.forEach(element=>{
      // console.log(filtProducts(element.products, _product))
      if(filtProducts(element.products, _product)){
          result.push(element);
          element.products = filtProducts(element.products, _product);
      }
  });
  return result;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loadingproduct: false,
    listCart: [],
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getCartAll.pending]: (state) => {
      state.loadingproduct = true;
    },
    [getCartAll.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [getCartAll.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      state.listCart = action.payload.data.store;
    },
    [updateQuantity.pending]: (state) => {
      state.loadingproduct = true;
    },
    [updateQuantity.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [updateQuantity.fulfilled]: (state, { payload }) => {
      state.loadingproduct = false;
      state.listCart.map((item) => {
        item.products.map((it) => {
          if (it.id_order_detail === payload.id) {
            it.quantity = payload.quantity;
          }
        });
      });
    },
    [addToCart.pending]: (state) => {
      state.loadingproduct = true;
    },
    [addToCart.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [addToCart.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      // state.message = action.payload.message;
    },

    [removerCart.pending]: (state) => {
      state.loadingproduct = true;
    },
    [removerCart.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [removerCart.fulfilled]: (state, { payload }) => {
      state.loadingproduct = false;
      console.log("payload", payload);
      if (payload.id) {
        state.listCart = filterData(state.listCart, payload.id[0]);

      }
    },
  },
});


export default cartSlice;
