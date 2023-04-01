import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import supplierApi from '../../api/supplierApi'

export const suppliergetHot = createAsyncThunk('supplier/suppliergetHot', async (data) => {
    const supplierHot = await supplierApi.getHot();  
    return supplierHot;
  });

export const supplierGetAll = createAsyncThunk("supplier/supplierGetAll",
  async (data) => {
    const { page, size } = data;
    const listsupplier = await supplierApi.getAll(page, size);
    return listsupplier;
  }
);

export const getSupplier = createAsyncThunk("supplier/getSupplier",
  async () => {
    const supplierAll = await supplierApi.getSupplier();
    return supplierAll
  }
);

export const getOneSupplier = createAsyncThunk("supplier/getOneSupplier",
  async (id) => {
    const oneSupplier = await supplierApi.getOneSupplier(id);
    return oneSupplier
  }
);

export const getSupplierById = createAsyncThunk("supplier/getSupplierById",
  async (data) => {
    const {page,size,id} = data;
    const supplierById = await supplierApi.getSupplierById(page,size,id)
    return supplierById
  }
)



const supplierSlice = createSlice({
  name: "supplier",
  initialState: {
    supplierList: [],
    supplier: [],
    supplierById: [],
    loadingsupplier: false,
    oneSupplier: {}
  },
  reducers: {
    // saveFilter: (state, action) => {
    //   state.filter = action.payload;
    // },
  },

  extraReducers: {
    [supplierGetAll.pending]: (state) => {
      state.loadingsupplier = true;
    },
    [supplierGetAll.rejected]: (state) => {
      state.loadingsupplier = false;
    },
    [supplierGetAll.fulfilled]: (state, action) => {
      state.loadingsupplier= false;
      state.supplierList= action.payload.data;
    },

    [getSupplierById.pending]: (state) => {
      state.loadingsupplier = true;
    },
    [getSupplierById.rejected]: (state) => {
      state.loadingsupplier = false;
    },
    [getSupplierById.fulfilled]: (state, action) => {
      state.loadingsupplier= false;
      state.supplierById= action.payload.data;
    },

    [getSupplier.pending]: (state) => {
      state.loadingsupplier = true;
    },
    [getSupplier.rejected]: (state) => {
      state.loadingsupplier = false;
    },
    [getSupplier.fulfilled]: (state, action) => {
      state.loadingsupplier= false;
      state.supplier= action.payload.data;
    },

    [getOneSupplier.pending]: (state) => {
      state.loadingsupplier = true;
    },
    [getOneSupplier.rejected]: (state) => {
      state.loadingsupplier = false;
    },
    [getOneSupplier.fulfilled]: (state, action) => {
      state.loadingsupplier= false;
      state.oneSupplier= action.payload.data;
    },
  }
})

export default supplierSlice
