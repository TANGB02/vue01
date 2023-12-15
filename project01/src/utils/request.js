import axios from "axios";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
import LocalCatch from "@/utils/catch";
const router = useRouter();
export const http = axios.create({
  baseURL: "http://study.zmyfrank.com",
});

export const req = axios.create({
  baseURL: "http://localhost:8080/user",
});
req.interceptors.request.use(
  (config) => {
    const token = LocalCatch.getToken("token");
    if (token) {
      config.headers.Authorization = "Bearer" + token;
    }
    return config;
  },
  (err) => {
    console.log(err);
  }
);
req.interceptors.response.use(
  (res) => {
    return res ? res.data : res;
  },
  (err) => {
    console.log(err);
    if (err.response.status === "401") {
      message.err("请先登录");
      setTimeout(() => {
        router.push({ path: "/login" });
      }, 1000);
    }
    console.log(err);
  }
);
