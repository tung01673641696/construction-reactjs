import axiosClient from './axiosClient'

const newsApi = {
    async getList(page, size) {
        const url = `/news/all-paging?page_size=${size}&page_index=${page}`
        return axiosClient.get(url)
    },
    async getDetail(id) {
        const url = `/news/${id}`
        return axiosClient.get(url)
    },
    async getAllDetail() {
        const url = `/news`
        return axiosClient.get(url)
    },
    async delete(id) {
        const url = `/news/${id}`;
        return axiosClient.delete(url)
    },

    async storeCreateNews(data) {
        const url = `/news/`;
        return axiosClient.post(url,data)
    },

    async getCategoriesNews() {
        const url=`/news-cate`;
        return axiosClient.get(url)
    },

    async updateNews(data) {
        const url = `/news/${data.id}`;
        return axiosClient.put(url, data.data)
    }
}

export default newsApi