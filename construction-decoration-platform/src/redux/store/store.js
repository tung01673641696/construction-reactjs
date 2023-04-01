import { configureStore } from '@reduxjs/toolkit'
import productslide from '../reducers/product'
import categorySlice from '../reducers/category'
import pageSlice from '../reducers/page'
import commentSlice from '../reducers/comment'
import assessSlice from '../reducers/assess'
import newSlice from '../reducers/news'
import userSlice from '../reducers/user'
import cartSlice from '../reducers/cart'
import storeSlice from '../reducers/store'
import searchSlice from '../reducers/search'
import addressSlice from '../reducers/address'
import groupSlice from '../reducers/group' 
import orderSlice from '../reducers/order'
import supplierSlice from '../reducers/supplier'
import projectSlice from "../reducers/project"
export const store = configureStore({
  reducer: {
    productReducer:productslide.reducer,
    categoryReducer:categorySlice.reducer,
    pageReducer:pageSlice.reducer,
    storeReducer:storeSlice.reducer,
    cartReducer:cartSlice.reducer,
    assessReducer:assessSlice.reducer,
    commentReducer:commentSlice.reducer,
    newsReducer:newSlice.reducer,
    searchReducer:searchSlice.reducer,
    userReducer:userSlice.reducer,
    addressReducer:addressSlice.reducer,
    groupReducer:groupSlice.reducer,
    orderReducer:orderSlice.reducer,
    supplierReducer:supplierSlice.reducer,
    projectReducer:projectSlice.reducer
  },
})

