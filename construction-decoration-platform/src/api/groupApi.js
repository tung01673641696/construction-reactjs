import axiosClient from "./axiosClient";
import axiosChat from "./axiosChat";

const groupApi = {
  //page, size,
  async getAllPaging(type) {
    const url = `/teams/all-paging?type=${type}&page_index=1&page_size=15`;
    return axiosClient.get(url);
  },
  async getGroupDetail(id) {
    const url = `/teams/${id}`;
    return axiosClient.get(url);
  },
  async joinGroup(data) {
    const url = `/members`;
    return axiosClient.post(url, data);
  },
  async createGroup(data) {
    const url = `/teams/`;
    return axiosClient.post(url, data);
  },

  async getAllPosts(idGroup) {
    const url = `/posts/team/${idGroup}?status=1&page_index=1&page_size=20`;
    return axiosClient.get(url);
  },

  async postNews(data) {
    const url = `/posts`;
    return axiosClient.post(url, data);
  },

  async getAllComment(news_id, post_id) {
    const url = `/comments?news_id=${news_id}&page_index=1&page_size=5?post_id=${post_id}&page_index=1&page_size=5`;
    return axiosClient.get(url);
  },

  async updateRoomChat(id, data) {
    const url = `/room/${id}/updategroupchat`;
    return axiosChat.post(url, data);
  },

  async createRoomChat(data) {
    const url = `/room/groupchat`;
    return axiosChat.post(url, data);
  },

  async sendMessage(id,data) {
    const url = `/room/${id}/message`;
    return axiosChat.post(url,data);
  },

  async getAllMessages(id) {
    const url = `/room/${id}?page_index=1&page_size=20`;
    return axiosChat.get(url);
  } 
};

export default groupApi;
