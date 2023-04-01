import axios from "axios";
import userApi from "./userApi";
import { refreshToken } from "../helpers/common";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    // baseURL: "http://192.168.2.8:4000",
    headers: {
        "content-type": "application/json",
        ecommerce_id: "70",
    },
});

axiosClient.interceptors.request.use(
    (config) => {
        const newConfig = config;

        // const token = window.token || storage.getToken();
        const token = localStorage.getItem("access_Token");
        if (token && token !== "undefined" && token !== "null") {
            newConfig.headers.Authorization = `Bearer ${token}`;
        }
        // console.log(config)
        return newConfig;
    },
    (error) => Promise.reject(error)
);
axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    async (errors) => {
        if (errors.response?.status === 401) {
            const originalRequest = errors.config;
            userApi
                .getToken({
                    refresh_Token: refreshToken,
                })
                .then((res) => {
                    originalRequest.headers.Authorization = `Bearer ${res.token}`;
                    localStorage.setItem("access_Token", res.token);
                    return axiosClient.request(originalRequest);
                });
        }
        return Promise.reject(errors);
    }
);
export default axiosClient;
