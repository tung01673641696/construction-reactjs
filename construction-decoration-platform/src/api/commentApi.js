import axiosClient from "./axiosClient";

const commentApi = {
   async getNews(id,page,size){
        const url  = `/comments/all-paging?news_id=${id}&page_index=${page}&page_size=${size}`
       return axiosClient.get(url)
   }
}

export default commentApi