import axiosClient from "./axiosClient";

const assessApi = {
  async getRating(id) {
    const url = `/assess/statistical/product/${id}`;
    return axiosClient.get(url);
  },
  async getList(page, size, id) {
    const url = `/assess/all-paging/product/${id}?page_index=${page}&page_size=${size}`;
    return axiosClient.get(url);
  },
};

export default assessApi;
