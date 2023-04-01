import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import storeApi from "../../api/storeApi";
import orderApi from "../../api/orderApi";

export const getDetailStore = createAsyncThunk(
  "store/storegetDetail",
  async (id) => {
    const detailStore = await storeApi.getDetail(id);
    return detailStore;
  }
);
export const getProductStore = createAsyncThunk(
  "store/storegetProduct",
  async (data) => {
    const { id, page, size } = data;
    const productStore = await storeApi.getProduct(id, page, size);
    return productStore;
  }
);

export const getMyStore = createAsyncThunk("store/getMyStore", async () => {
  const myStore = await storeApi.getMyStore();
  return myStore;
});

export const storeGetProduct = createAsyncThunk(
  "store/getProductForStore",
  async (id, thunkApi) => {
    const myStore = await storeApi.getMyStore();
    if (myStore.status === 200) {
      const myProduct = await storeApi.storeGetProduct(myStore.data.id);
      return myProduct;
    }
  }
);

export const storeDeleteProduct = createAsyncThunk(
  "store/deleteProduct",
  async (id, thunkApi) => {
    const result = await storeApi.storeDeleteProduct(id);
    if (result.status === 200) {
      thunkApi.dispatch(storeGetProduct());
    }
  }
);

export const storeEditProduct = createAsyncThunk(
  "store/editProduct ",
  async (data) => {
    const result = await storeApi.storeEditProduct(data);
    return result;
  }
);



export const storeCreateProduct = createAsyncThunk(
  "store/CreateProduct",
  async (data) => {
    const result = await storeApi.storeCreateProduct(data);
    return result;
  }
);

export const registerStore = createAsyncThunk(
  "store/registerStore",
  async (data) => {
    const result = await storeApi.registerStore(data);
    return result
  }
)

// export const getAllStore = createAsyncThunk(
//   "store/getAllStore",
//   async (data) => {
//     const fakeData = {
//       id: 1,
//       name: "Emin",
//       email:"tientd0111@gmail.com",
//       phone:"0899813354",
//       user_name: 'Tiến',
//       address: 'Hà Nội',
//       date: "01/11/2019"
//     }
//     return fakeData
//   }
// )
// console.log('x',getAllStore())
const storeSlice = createSlice({
  name: "store",
  initialState: {
    detailStore: {},
    loadingproduct: false,
    listProductStore: [],
    myStore: {},
    productsOfStore: [],
    listOrderOfStore: [],
    fakeData: [
      {
        "id": 278,
        "name": "Shop hoa quả",
        "des": "des 1",
        "email": "tuanbc02@gmail.com",
        "phone": "0387295999",
        "ecommerce": {
          "id": 67,
          "name": "Sàn Nông Nghiệp"
        },
        "user": 455,
        "address": {
          "city": {
            "ghn_id": 201,
            "id": 63,
            "name": "Hà Nội"
          },
          "district": {
            "ghn_id": 1582,
            "id": 712,
            "name": "Huyện Đông Anh"
          },
          "ward": {
            "ghn_id": "1A1304",
            "id": 19626,
            "name": "Xã Đại Mạch"
          }
        },
        "image_url": [
          {
            "id": 1,
            "url": "/upload/uploads/1649738156133IMG0007.PNG"
          }
        ],
        "products": [],
        "avatar": "/upload/uploads/1666314645980beefruit.jpg",
        "rate": "0.0",
        "key_language": 1,
        "total_like": null,
        "total_product": null,
        "ship_unit_id": 3534581,
        "enterprise_number_store": null,
        "date_issue_store": "Invalid date",
        "place_issue_store": null,
        "establishment_number": null,
        "date_issue": "Invalid date",
        "place_issue": null,
        "personal_number": null,
        "created_date": "2022-09-13T02:42:36.000Z"
      },
      {
        "id": 410,
        "name": "Food",
        "des": "mô tả doanh nghiệp",
        "email": "daikafo3@gmail.com",
        "phone": "0364325638",
        "ecommerce": {
          "id": 67,
          "name": "Sàn Nông Nghiệp"
        },
        "user": 812,
        "district_id": 706,
        "address": {
          "address": "ngõ 38 xuân la",
          "city": {
            "id": 63,
            "name": "Hà Nội",
            "ghn_id": 201
          },
          "district": {
            "id": 706,
            "name": "Huyện Đan Phượng",
            "ghn_id": 1804
          },
          "ward": {
            "id": 2925,
            "name": "Xã Liên Hà",
            "ghn_id": "1B2206"
          }
        },
        "image_url": [
          {
            "id": 1,
            "url": "/upload/uploads/1670225586208fundin.png"
          }
        ],
        "products": [],
        "website": "smiletech.vn",
        "rate": "0.0",
        "key_language": 1,
        "total_like": 0,
        "total_product": 0,
        "ship_unit_id": 3534768,
        "enterprise_number_store": null,
        "date_issue_store": "2022-12-06T14:50:25+07:00",
        "place_issue_store": null,
        "establishment_number": null,
        "date_issue": "2022-12-06T14:50:25+07:00",
        "place_issue": null,
        "personal_number": "1234568795",
        "created_date": "2022-12-06T07:50:25.000Z"
      }
    ]
  },
  reducers: {},
  extraReducers: {
    [getDetailStore.pending]: (state) => {
      state.loadingproduct = true;
    },
    [getDetailStore.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [getDetailStore.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      state.detailStore = action.payload.data;
    },
    [getProductStore.pending]: (state) => {
      state.loadingproduct = true;
    },
    [getProductStore.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [getProductStore.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      state.listProductStore = action.payload.data.data;
    },
    [getMyStore.pending]: (state) => {
      state.loadingproduct = true;
    },
    [getMyStore.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [getMyStore.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      state.myStore = action.payload;
    },
    [storeGetProduct.pending]: (state) => {
      state.loadingproduct = true;
    },
    [storeGetProduct.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [storeGetProduct.fulfilled]: (state, action) => {
      state.loadingproduct = false;
      // console.log("productsOfStore", action.payload);
      state.productsOfStore = action.payload.data.data;
    },



    [storeCreateProduct.pending]: (state) => {
      state.loadingproduct = true;
    },
    [storeCreateProduct.rejected]: (state) => {
      state.loadingproduct = false;
    },
    [storeCreateProduct.fulfilled]: (state, action) => {
      state.loadingproduct = false;

      //map in here
      state.productsOfStore = action.payload.data;
    },
  },
});

export default storeSlice;
