import axios from "axios";
import qs from "qs";
import { Object } from "core-js";
import { baseURL } from "@/utils/utils";
import { Notify } from "vant";

const ContentType = {
  urlencoded: "application/x-www-form-urlencoded;charset=UTF-8",
  json: "application/json",
  formData: "multipart/form-data",
};

const baseService = axios.create({
  baseURL,
  timeout: 6000,
  withCredentials: true,
  responseType: "json",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

baseService.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] =
      ContentType[config.data instanceof FormData ? "formData" : "json"];
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

baseService.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      if (res.data.resultCode === "000000") {
        return res.data.data;
      } else {
        Notify({ type: "danger", message: res.data.resultMsg });
        return false;
      }
    } else if (res.status === 401 || res.status === 403) {
      Notify({
        type: "danger",
        message: "登录过期或权限不足, 请重新登陆!",
      });
      return false;
    } else if (res.status === 500) {
      Notify({
        type: "danger",
        message: "请求数据失败, 请重试!",
      });
      console.log(res);
      return false;
    }
    return res;
  },
  (error) => {
    const msg = error.message;
    const result = error.response;
    if (result) {
      const { data } = result;
      Notify({
        type: "danger",
        message: data.resultMsg,
      });
    } else if (msg) {
      if (msg === "Network Error") {
        Notify({
          type: "danger",
          message: "网络错误,请检查网络!",
        });
      } else {
        Notify({
          type: "danger",
          message: msg,
        });
      }
    } else {
      Notify({
        type: "danger",
        message: "未知错误,请重试!",
      });
    }
    console.log(error.toJSON());
    return Promise.reject(error);
  }
);

export default baseService;
