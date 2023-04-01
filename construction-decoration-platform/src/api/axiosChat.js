import axios from "axios";

const axiosChat = axios.create({
    // baseURL: "http://192.168.2.161:3000",
    baseURL: "https://chatsmt-production.up.railway.app/",
    // baseURL: "http://192.168.2.15:3000",
    // baseURL:
    // "https://chatsmt-production.up.railway.app/room/630f27fa0d78533771b9e0ba",
    // "http://chat-smt.vercel.app/",
    headers: {
        "content-type": "application/json",
    },
});

axiosChat.interceptors.request.use(
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

export default axiosChat;
