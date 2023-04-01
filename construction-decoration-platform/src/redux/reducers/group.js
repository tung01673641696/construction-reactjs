import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import groupApi from "../../api/groupApi";

export const getAllGroup = createAsyncThunk(
  "group/groupGetAllGroup",
  async (type) => {
    const result = await groupApi.getAllPaging(type);
    return result;
  }
);

export const getGroupDetail = createAsyncThunk(
  "group/getGroupDetail",
  async (id) => {
    const result = await groupApi.getGroupDetail(id);
    return result;
  }
);

export const getAllGroupJoined = createAsyncThunk(
  "group/getAllGroupJoined",
  async (type) => {
    const result = await groupApi.getAllPaging(type);
    return result;
  }
);

export const getAllGroupCreated = createAsyncThunk(
  "group/getAllGroupCreated",
  async (type) => {
    const result = await groupApi.getAllPaging(type);
    return result;
  }
);

export const getAllPosts = createAsyncThunk(
  "group/getAllPosts",
  async (idGroup) => {
    const res = await groupApi.getAllPosts(idGroup);
    return res;
  }
);

export const postNew = createAsyncThunk(
  "group/postNew",
  async (data) => {
    const res = await groupApi.postNews(data);
    return res;
  }
);

const groupSlide = createSlice({
  name: "group",
  initialState: {
    groupList: [],
    loading: false,
    groupDetails: [],
    groupOwner: [],
    groupCreated: [],
    allPosts: [],
    Posts: []
  },
  reducers: {},
  extraReducers: {
    [getAllGroup.pending]: (state) => {
      state.loading = true;
    },
    [getAllGroup.rejected]: (state) => {
      state.loading = false;
    },
    [getAllGroup.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.groupList = payload.data;
    },
    [getAllGroupJoined.pending]: (state) => {
      state.loading = true;
    },
    [getAllGroupJoined.rejected]: (state) => {
      state.loading = false;
    },
    [getAllGroupJoined.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.groupOwner = payload.data;
    },
    [getAllGroupCreated.pending]: (state) => {
      state.loading = true;
    },
    [getAllGroupCreated.rejected]: (state) => {
      state.loading = false;
    },
    [getAllGroupCreated.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.groupCreated = payload.data;
    },
    [getGroupDetail.pending]: (state) => {
      state.loading = true;
    },
    [getGroupDetail.rejected]: (state) => {
      state.loading = false;
    },
    [getGroupDetail.fulfilled]: (state, action) => {
      state.loading = false;
      state.groupDetails = action.payload.data;
    },
    [getAllPosts.pending]: (state) => {
      state.loading = true;
    },
    [getAllPosts.rejected]: (state) => {
      state.loading = false;
    },
    [getAllPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.allPosts = payload.data;
    },
    [postNew.pending]: (state) => {
      state.loading = true;
    },
    [postNew.rejected]: (state) => {
      state.loading = false;
    },
    [postNew.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.Posts = payload.data;
    },
  },
});

export default groupSlide;
