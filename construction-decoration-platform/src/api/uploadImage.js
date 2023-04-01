import axiosClient from "./axiosClient";

const uploadApi = {
  async uploadArray(data) {
    const url = `/upload/upload-array`;
    return axiosClient.post(url, data);
  },
  async uploadSingle(data) {
    const url = `/upload/upload-single`;
    return axiosClient.post(url, data);
  },
};

export default uploadApi;
