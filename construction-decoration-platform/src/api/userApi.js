import axiosClient from "./axiosClient";

const userApi = {
  async login(data) {
    // data : user_name password
    const url = "/users/login";
    return axiosClient.post(url, data);
  },
  async register(data) {
    const url = "/users/register";
    return axiosClient.post(url, data);
  },
  async registerToken(data) {
    const url = `/users/register-web`;
    return axiosClient.post(url, data);
  },
  async forgotPassword(data) {
    const url = `/users/verify-email-web`;
    return axiosClient.post(url,data);
  },
  async confirmPassword(data) {
    const url = `/users/forgot-password`;
    return axiosClient.post(url,data);
  },
  async verifyCode(otp) {
    const url = "/customers/check-otp";
    return axiosClient.post(url, {otp});
  },
  //data user_name
  async changePassword(data) {
    const url = "/users/change-password";
    return axiosClient.post(url, data);
  },
  async myInfo() {
    const url = "/customers/me";
    return axiosClient.get(url);
  },
  async getToken(data) {
    const url = "users/refresh";
    return axiosClient.post(url, data);
  },
  async update(id,data) {
    const url = `/users/${id}`;
    return axiosClient.put(url,data);
  },
  async confirmRegister(data) {
    const url = `users/confirm/token`;
    return axiosClient.post(url, data);
  },
  async loginGoogle(data) {
    const url = `/users/login-with-google`;
    return axiosClient.post(url, data);
  },
  async loginFacebook(data) {
    const url = `/users/login-with-facebook`;
    return axiosClient.post(url, data);
  },
};

export default userApi;
