import axios from "axios";
import router from "../router";
import config from "../config";
import { ElMessage } from "element-plus";
const TOKEN_INVALID = "Token认证失败，请重新登陆";
const NETWORK_ERROR = "网络请求异常，请稍后重试";

const service = axios.create({
  baseURL: config.baseApi,
  timeout: 80000,
});

service.interceptors.request.use(req => {
  const headers = req.headers;

  if (!headers.Authorization) {
    headers.Authorization = "Bear Jack";
  }

  return req;
});

service.interceptors.response.use(res => {
  const { code, data, msg } = res.data;
  if (code === 200) {
    return data;
  } else if (code === 40001) {
    ElMessage.error(TOKEN_INVALID);
    setTimeout(() => {
      router.push("/login");
    }, 15000);
    return Promise.reject(TOKEN_INVALID);
  } else {
    ElMessage.error(msg || NETWORK_ERROR);
    return Promise.reject(msg || NETWORK_ERROR);
  }
});

// 请求核心函数
function request(options) {
  options.method = options.method || "get";
  // 转换参数格式，始终传递 data 参数即可
  if (options.method.toLowerCase() === "get") {
    options.params = options.data;
  }

  if (typeof options.mock !== "undefined") {
    config.mock = options.mock;
  }

  if (config.env === "prod") {
    service.defaults.baseURL = config.baseApi;
  } else {
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi;
  }

  return service(options);
}

["get", "post", "put", "delete", "patch"].forEach(method => {
  request[method] = (url, data, options) => {
    return request({
      url,
      method,
      data,
      ...options,
    });
  };
});

export default request;
