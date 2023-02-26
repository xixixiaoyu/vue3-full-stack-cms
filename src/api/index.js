import request from "../utils/request";

export default {
  login(data) {
    return request({
      url: "/users/login",
      method: "post",
      data,
      mock: false,
    });
  },
  noticeCount() {
    return request({
      url: "/leave/count",
      method: "get",
      mock: false,
    });
  },
  getMenuList() {
    return request({
      url: "/menu/list",
      method: "get",
    });
  },
};
