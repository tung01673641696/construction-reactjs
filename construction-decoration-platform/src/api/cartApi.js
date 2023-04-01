import axiosClient from "./axiosClient";

const cartApi = {
  async add(data) {
    const url = `/cart`;
    return axiosClient.post(url, data);
  },
  async get() {
    const url = `/cart`;
    return axiosClient.get(url);
  },
  async remove(data) {
    const url = "/cart";
    return axiosClient.delete(url, {data});
  },
  async updateQuantity(quantity, id) {
    const url = `/cart/${id}`;
    return axiosClient.put(url, {quantity});
  },
  
  async checkOut(data) {
    const url = `/orders/check-out`;
    return axiosClient.post(url, data);
  }
};

export default cartApi;
