// api管理
import http from "../utils/request";

const api = {
  getStuList: "/studentList",
  getMenuListByPage: "http://study.zmyfrank.com/menuListByPage",
};
export const getMenuListByPage = (params = {}) => {
  return http({
    url: api.getMenuListByPage,
    method: "get",
    params,
  });
};
export const getStuList = () => {
  return http({
    url: api.getStuList,
    method: "get",
  });
};
