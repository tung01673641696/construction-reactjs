import axiosClient from "./axiosClient";

const orderApi = {
  async getMyOrder() {
    const url = `/orders/my-orders`;
    return axiosClient.get(url);
  },
  async getOrderDetails(id) {
    const url = `/orders/${id}`;
    return axiosClient.get(url);
  },
  async getFeeShip(data) {
    const url = "orders/fee";
    return axiosClient.post(url, data);
  },
  async orderCountPrice(data) {
    const url = `/orders/count-price`;
    return axiosClient.post(url,data);
  },
  async checkoutOrder(data) {
    const url = `/orders/check-out1`;
    return axiosClient.post(url,data);
  },
  async getOrderByStatus(key) {
    const url = `orders/my-orders-store/412?status=${key}`;
    return axiosClient.get(url);
  },
  async changeStatusOrder(data) {
    console.log(data)
    const url = `/orders/status/${data.id}`;
    return axiosClient.put(url,data.status);
  }
};

export default orderApi;
