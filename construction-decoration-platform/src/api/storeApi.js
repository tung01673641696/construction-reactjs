import axiosClient from "./axiosClient";
import { useSelector } from "react-redux";
import uploadApi from "./uploadImage";
const storeApi = {
  async getDetail(id) {
    const url = `/stores/${id}`;
    return axiosClient.get(url);
  },
  async getProduct(id, page, size) {
    const url = `/products/all-paging?store_id=${id}&page_index=${page}&page_size=${size}`;
    return axiosClient.get(url);
  },
  async getMyStore() {
    const url = `/stores/my-store`;
    return axiosClient.get(url);
  },
  async storeGetProduct(id) {
    const url = `products/all-paging?store_id=${id}`;
    return axiosClient.get(url);
  },

  async storeDeleteProduct(id) {
    const url = `products/${id}`;
    return axiosClient.delete(url);
  },

  async storeEditProduct(data) {
    const url = `products/${data.id}`;
    // async uploadApi();
    return axiosClient.put(url, data.data);
  },

  async getOrderByStore(id) {
    const url = `/orders/my-orders-store/${id}`;
    return axiosClient.get(url);
  },

  async storeCreateProduct(data) {
    const url = `/products`;
    return axiosClient.post(url, data);
  },


  async registerStore(data) {
    const url = `/stores`;
    return axiosClient.post(url,data);
  }
};

export default storeApi;
