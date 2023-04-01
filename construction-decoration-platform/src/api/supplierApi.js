import axiosClient from "./axiosClient";

const supplierApi = {
    //
    async getAll(page, size) {
        const url = `/stores/all-paging?page_index=${page}&page_size=${size}`
        return axiosClient.get(url)
    },

    async getSupplier() {
        const url = `/supplier`;
        return axiosClient.get(url)
    },

    async getOneSupplier(id) {
        const url = `/supplier/${id}`;
        return axiosClient.get(url)
    },

    async getSupplierById(page,size,id) {
        const url = `/supplier/all-paging/all?page_index=${page}&page_size=${size}&category_id=${id}`
        return axiosClient.get(url)
    }
}

export default supplierApi