import axiosClient from "./axiosClient";

const searchApi = {
  // async filter(page, size, desc, name) {
  async filter(name) {
    // const url = `/products/all-paging?columnName=Price&isDesc=${desc}&name=${name}&page_index=${page}&page_size=${size}`;
    const url = `/products/all-paging?name=${name}`;
    return axiosClient.get(url);
  },
};

export default searchApi;
