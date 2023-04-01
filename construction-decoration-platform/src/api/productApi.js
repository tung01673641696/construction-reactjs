import axiosClient from "./axiosClient";

const productApi = {
  async getAllFurniture() {
    const url = `/products/all-paging?category_id=728`;
    return axiosClient.get(url);
  },
  async getDetail(id) {
    const url = `/products/get/${id}`
    return axiosClient.get(url)
  },
  async search() {
    const url = `/products/all-paging?name=a&page_index=1&page_size=5&price_start=10&price_end=1000000`
    return axiosClient.get(url)
  },
  async getForYou(page, size) {
    const url = `/products/all-paging?page_index=${page}&page_size=${size}`
    return axiosClient.get(url)
  },
  async onLike(data) {
    const url = `likes`;
    return axiosClient.post(url, data)
  },
  async getLikeProduct() {
    const url = `/likes/get-like-product`;
    return axiosClient.get(url);
  },
  async getBasicMaterials(id) {
    const url = `/products/all-paging?category_id=${id}`;
    return axiosClient.get(url);
  },
  async getAllBasicMaterials() {
    const url = `/products`;
    return axiosClient.get(url);
  }
};

export default productApi;
