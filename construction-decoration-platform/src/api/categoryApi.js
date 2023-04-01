import axiosClient from "./axiosClient";

const categoryApi = {
  async getAll() {
    const url = `/categories?category_id=0`;
    return axiosClient.get(url);
  },
  async getProduct(id, page, arrange) {
    const url = `/products/all-paging?category_id=${id}&page_index=${page}&page_size=12&columnName=Price&${arrange}=true`;
    return axiosClient.get(url);
  },
};

export default categoryApi;
