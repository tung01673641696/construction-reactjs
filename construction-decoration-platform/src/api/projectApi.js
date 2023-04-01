import axiosClient from "./axiosClient";

const ProjectApi = {
  async createProject(data) {
    const url = `/projects`;
    return axiosClient.post(url, data);
  },

  async getOneProject(id) {
    const url = `/projects/${id}`;
    return axiosClient.get(url);
  },

  async getProject() {
    const url = `/projects`;
    return axiosClient.get(url)
  },

  async deleteProject(id) {
    const url = `/projects/${id}`;
    return axiosClient.delete(url)
  },

  async getCategoriesCity() {
    const url = `/cities`;
    return axiosClient.get(url)
  },

  async getSupplier() {
    const url = `/supplier/`;
    return axiosClient.get(url)
  },

  async getStyleType() {
    const url = `categories/get-all?type=14`;
    return axiosClient.get(url)
  },

  async getProjectType() {
    const url = `/categories/category-tree?type=5`;
    return axiosClient.get(url)
  },

  async updateProject(data) {
    const url = `/projects/${data.id}`;
    return axiosClient.put(url,data.data)
  },

  async getProjectByCategory(data) {
    const url = `/projects/all-paging/all?page_index=${data.index}&page_size=${data.size}&type=${data.type}`;
    return axiosClient.get(url)
  }

};

export default ProjectApi;
