import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import orderApi from "../../api/orderApi";
import voucherApi from "../../api/voucherApi";

export const getMyOrder = createAsyncThunk("order/getMyOrder", async () => {
  try {
    const result = await orderApi.getMyOrder();
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const getOrderDetails = createAsyncThunk("order/getOrderDetails", async (id) => {
  try {
    const result = await orderApi.getOrderDetails(id);
    return result;
  } catch (error) {
    console.log(error);
  }
})

export const checkoutCart = createAsyncThunk("order/checkoutCart", async (data) => {
  try {
    const result = await orderApi.orderCountPrice(data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
})

export const applyVoucherStore = createAsyncThunk("order/applyVoucherStore", async (data) => {
  try {
    const result = await voucherApi.applyVoucher(data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
})

export const applyVoucherEcommerce = createAsyncThunk("order/applyVoucherEcommerce", async (data) => {
  try {
    const result = await voucherApi.applyVoucherEcommerce(data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
})

export const getOrderByStatus = createAsyncThunk(
    "order/getOrderByStatus",
    async (key) => {
      try{
        const res = await orderApi.getOrderByStatus(key)
        return res
      }catch (e) {
        console.log(e)
      }
    }
)

export const changeStatusOrder = createAsyncThunk("order/changeStatusOrder",
    async (data,thunkApi) => {
    try {
      const result = await orderApi.changeStatusOrder(data.data);
      if(result.status === 200){
        thunkApi.dispatch(getOrderByStatus(data.key))
      }
    } catch (error) {
      console.log(error);
    }
})

const orderSlice = createSlice({
  name: "order",
  initialState: {
    loadingproduct: false,
    listMyOrder: [],
    detailsOrder: "",
    loadingCheckoutCart: false,
    dataCheckout: [],

  },
  reducers: {},
  extraReducers: {
    [getMyOrder.pending]: (state) => {
      state.loadingproduct = true;
    },
    [getMyOrder.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [getMyOrder.fulfilled]: (state, {payload}) => {
      state.loadingproduct = false;
      state.listMyOrder = payload.data;
    },
    [getOrderByStatus.pending]: (state) => {
      state.loadingproduct = true;
    },
    [getOrderByStatus.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [getOrderByStatus.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      state.listOrderOfStore = action.payload.data;
    },
    [getOrderDetails.pending]: (state) => {
      state.loadingproduct = true;
    },
    [getOrderDetails.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [getOrderDetails.fulfilled]: (state, {payload}) => {
      state.loadingproduct = false;
      state.detailsOrder = payload.data;
    },
    [checkoutCart.pending]: (state) => {
      state.loadingproduct = true;
      state.loadingCheckoutCart = true;
    },
    [checkoutCart.rejected]: (state) => {
      state.loadingproduct = false;
      state.loadingCheckoutCart = false
    },
    [checkoutCart.fulfilled]: (state, {payload}) => {
      state.loadingproduct = false;
      state.loadingCheckoutCart = false;
      state.dataCheckout = payload;
    },
    [applyVoucherStore.pending]: (state) => {
      state.loadingproduct = true;
    },
    [applyVoucherStore.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [applyVoucherStore.fulfilled]: (state, {payload}) => {
      state.loadingproduct = false;
      state.dataCheckout = payload;
    },
    [applyVoucherEcommerce.pending]: (state) => {
      state.loadingproduct = true;
    },
    [applyVoucherEcommerce.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [applyVoucherEcommerce.fulfilled]: (state, {payload}) => {
      state.loadingproduct = false;
      state.dataCheckout = payload;
    },
  },
});

export default orderSlice;
