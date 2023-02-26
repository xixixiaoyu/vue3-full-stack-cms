import request from "../utils/request";

export default {
  login(data) {
    return request({
      url: "/users/login",
      method: "post",
      data,
    });
  },
  noticeCount() {
    return request({
      url: "/leave/count",
      method: "get",
    });
  },
  getMenuList() {
    return request({
      url: "/menu/list",
      method: "get",
    });
  },
};
