import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";
import { openNotification } from '../../components/Alert/AlertProduct';


export const getMyInfo = createAsyncThunk(
    "user/getMyInfo",
    async (data, { rejectWithValue }) => {
        const info = await userApi.myInfo();

        if (!info.data) {
            return rejectWithValue("No user found");
        }
        return info;
    }
);
export const updateInfoUser = createAsyncThunk("user/updateInfo", async (id, data, thunkApi, { rejectWithValue }) => {
    const update = await userApi.update(id, data);
    // if(update.status == 200) {
    //     thunkApi.dispatch(getMyInfo())
    // }
    if (update.status != 200) {
        return rejectWithValue("No user found");
    }
    return update;


});

export const login = createAsyncThunk(
    "user/login",
    async (data, { rejectWithValue }) => {
        const result = await userApi.login(data);
        if (result.status === 200) {
            return result;
        }
        // return rejectWithValue("No user found");
    }
);

export const forgotPassword = createAsyncThunk(
    "user/forgotPassword",
    async (data) => {
        const forgotPassword = await userApi.registerToken(data);
        return forgotPassword
    });

export const verifyGmail = createAsyncThunk(
    "user/verifyGmail",
    async (data) => {
        const verifyGmail = await userApi.forgotPassword(data);
        return verifyGmail
    });

export const changePassword = createAsyncThunk(
    "user/changePassword",
    async (data) => {
        const changePassword = await userApi.registerToken(data);
        return changePassword
    });

export const loginGoogle = createAsyncThunk(
    "user/loginGoogle",
    async (data) => {
        const result = await userApi.loginGoogle(data);
        return result;

    }
);

export const loginFacebook = createAsyncThunk(
    "user/loginFacebook",
    async (data) => {
        const result = await userApi.loginFacebook(data);
        return result;

    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            auth: false,
            data: "",
        },
        loading: false,
        error: "",
    },
    reducers: {
        setError(state, action) {
            state.error = action.payload;
        },
    },
    extraReducers: {
        [getMyInfo.pending]: (state) => {
            state.loading = true;
        },
        [getMyInfo.rejected]: (state, { payload }) => {
            state.loading = false;
            state.user.auth = false;
        },
        [getMyInfo.fulfilled]: (state, { payload }) => {
            state.loading = false;
            // state.myInfo = action.payload.data;
            state.user.data = payload.data;
            state.user.auth = true;
        },
        [login.pending]: (state) => {
            state.loading = true;
        },
        [login.rejected]: (state) => {
            state.loading = false;
            state.user.auth = false;
            openNotification("error", "Sai Tài Khoản Hoặc Mật Khẩu")
        },
        [login.fulfilled]: (state, { payload }) => {
            state.loading = false;
            const dataPayload = payload.data;
            // console.log("actionlogin", action.payload);
            if (dataPayload) {
                var access_token = dataPayload.access_token;
                var refresh_token = dataPayload.refresh_token;

                var { access_token, refresh_token, ...result } = dataPayload;
                localStorage.setItem("user", JSON.stringify(dataPayload));
                localStorage.setItem("access_Token", access_token);
                localStorage.setItem("refresh_Token", refresh_token);
                // state.user = dataP;
                state.user.data = result;
                state.user.auth = true;
                openNotification("success", "Đăng Nhập Thành Công !")

            }
            // state.error = "Đăng Nhập Thành Công !";
        },
        [loginGoogle.pending]: (state) => {
            state.loading = true;
        },
        [loginGoogle.rejected]: (state) => {
            state.loading = false;
            state.user.auth = false;
        },
        [loginGoogle.fulfilled]: (state, { payload }) => {
            state.loading = false;
            const dataPayload = payload.data;
            if (dataPayload) {
                var access_token = dataPayload.access_token;
                var refresh_token = dataPayload.refresh_token;

                var { access_token, refresh_token, ...result } = dataPayload;
                localStorage.setItem("user", JSON.stringify(dataPayload));
                localStorage.setItem("access_Token", access_token);
                localStorage.setItem("refresh_Token", refresh_token);
                // state.user = dataP;
                state.user.data = result;
                state.user.auth = true;
                openNotification("success", "Đăng Nhập Thành Công !")
            }
            // state.error = "Đăng Nhập Thành Công !";
        },

        // Login facebook
        [loginFacebook.pending]: (state) => {
            state.loading = true;
        },
        [loginFacebook.rejected]: (state) => {
            state.loading = false;
            state.user.auth = false;
        },
        [loginFacebook.fulfilled]: (state, { payload }) => {
            state.loading = false;
            const dataPayload = payload.data;
            if (dataPayload) {
                var access_token = dataPayload.access_token;
                var refresh_token = dataPayload.refresh_token;

                var { access_token, refresh_token, ...result } = dataPayload;
                localStorage.setItem("user", JSON.stringify(dataPayload));
                localStorage.setItem("access_Token", access_token);
                localStorage.setItem("refresh_Token", refresh_token);
                state.user.data = result;
                state.user.auth = true;
                openNotification("success", "Đăng Nhập Thành Công !")
            }
        },
    },
});

export const { setError } = userSlice.actions;

export default userSlice;
