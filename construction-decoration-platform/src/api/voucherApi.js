import axiosClient from "./axiosClient";

const voucherApi = {
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
    return axiosClient.delete(url, { data });
  },
  async updateQuantity(quantity, id) {
    const url = `/cart/${id}`;
    return axiosClient.put(url, { quantity });
  },
  async checkOut(data) {
    const url = `/orders/check-out1`;
    return axiosClient.post(url, data);
  },
  async getVoucherStore(data, type) {
    const url = `/vouchers/get-voucher-apply?type=${type}`;
    return axiosClient.post(url, data);
  },
  async applyVoucher(data) {
    const url = `vouchers/apply-store`;
    return axiosClient.post(url, data);
  },
  async applyVoucherEcommcerce(data) {
    const url = `/vouchers/apply-ecommerce`;
    return axiosClient.post(url,data)
  }
};

export default voucherApi;
