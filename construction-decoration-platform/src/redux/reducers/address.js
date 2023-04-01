import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import addressApi from "../../api/addressApi";
import { toast } from "react-toastify";

export const getCity = createAsyncThunk("address/getCityAddress", async () => {
  const city = await addressApi.getCity();
  return city;
});

export const getDistrict = createAsyncThunk(
  "address/getDistrictAddress",
  async (id) => {
    const district = await addressApi.getDistricts(id);
    return district;
  }
);
export const deleteAddress = createAsyncThunk(
  "address/deleteAddress",
  async (id) => {
    const deleteMyAddress = await addressApi.removeAddress(id);
    if(deleteMyAddress.status === 200) {
      toast.success("Xóa địa chỉ thành công");
      const listAddress = await addressApi.getMyAddress();
      return listAddress;
    } else {
      toast.error("Xóa địa chỉ thất bại");
    }
  }
);
export const getWard = createAsyncThunk(
  "address/getWardAddress",
  async (id) => {
    const ward = await addressApi.getWard(id);
    return ward;
  }
);
export const getListAddress = createAsyncThunk(
  "address/getListAddress",
  async () => {
    const listAddress = await addressApi.getMyAddress();
    return listAddress;
  }
);

export const createNewAddress = createAsyncThunk(
  "address/createNewAddress",
  async (data) => {
    const newAddress = await addressApi.createNewAddress(data);
  }
);



export const getOneAddress = createAsyncThunk(
  "address/getOneAddress",
  async (id) => {
    const ward = await addressApi.getInforOneAddress(id);
    return ward;
  }
);

export const editAddress = createAsyncThunk(
  "address/editAddress",
  async (data) => {
    const updateAddress = await addressApi.updateAddress(data);
      return updateAddress;
    }
);


const addressSlice = createSlice({
  name: "address",
  initialState: {
    city: [],
    loadingproduct: false,
    district: [],
    ward: [],
    listAddress: [],
    addAddressSelect: [],

    oneAddress: {}
  },
  reducers: {
    setAddressSelect: (state, {payload}) => {
      state.addAddressSelect = payload;

      // console.log("asda", state.listAddress);
      // state.listAddress.map((it) => {
      //   it.id == action.payload
      // })
    },
  },
  extraReducers: {
    [getCity.pending]: (state) => {
      state.loadingproduct = true;
    },
    [getCity.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [getCity.fulfilled]: (state, action) => {
      state.loading = false;
      state.city = action.payload.data;
    },
    [deleteAddress.pending]: (state) => {
      state.loadingproduct = true;
    },
    [deleteAddress.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [deleteAddress.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [getDistrict.pending]: (state) => {
      state.loadingproduct = true;
    },
    [getDistrict.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [getDistrict.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      state.district = action.payload.data;
      // state.total_page = action.payload.data.total_pages;
    },
    [getWard.pending]: (state) => {
      state.loadingproduct = true;
    },
    [getWard.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [getWard.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      state.ward = action.payload.data;

      
      // state.total_page = action.payload.data.total_pages;
    },

    [getListAddress.pending]: (state) => {
      state.loadingproduct = true;
    },
    [getListAddress.rejected]: (state) => {
      state.loadingproduct = false;
      console.log("getListAddress.rejected");
    },
    [getListAddress.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      state.listAddress = action.payload.data;
      // state.total_page = action.payload.data.total_pages;

      console.log("getListAddress.fulfilled");
    },

    [createNewAddress.pending]: (state) => {
      console.log("createNewAddress.pending");
    },

    [createNewAddress.fulfilled]: (state, action) => {
      // console.log("createNewAddress.fulfilled");
      state.loadingproduct = false

    },

    [createNewAddress.rejected]: (state, action) => {
      console.log("createNewAddress.rejected");
    },
    [deleteAddress.fulfilled]: (state, action) => {
      state.listAddress = action.payload.data;
    },



    [getOneAddress.pending]: (state) => {
      state.loadingproduct = true;
    },
    [getOneAddress.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [getOneAddress.fulfilled]: (state, action) => {
      state.loading = false;
      state.oneAddress = action.payload.data;

    },
  },
});

export const { setAddressSelect } = addressSlice.actions;

export default addressSlice;
