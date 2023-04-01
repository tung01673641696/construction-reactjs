import axiosClient from "./axiosClient";

const addressApi = {
  async getCity() {
    const url = `/cities`;
    return axiosClient.get(url);
  },
  async getDistricts(id) {
    const url = `/districts/city/${id}`;
    return axiosClient.get(url);
  },
  async getWard(id) {
    const url = `/wards/district/${id}`;
    return axiosClient.get(url);
  },
  async createNewAddress(data) {
    const url = "/address";
    return axiosClient.post(url, data);
  },
  async getMyAddress() {
    const url = `/address/my-address`;
    return axiosClient.get(url);
  },
  async removeAddress(id) {
    const url = `/address/${id}`;
    return axiosClient.delete(url);
  },

  async getInforOneAddress(id) {
    const url = `/address/${id}`;
    return axiosClient.get(url);
  },

  async updateAddress(data) {
    const url = `/address/${data.id}`;
    return axiosClient.put(url, data.data);
  }
};

export default addressApi;
