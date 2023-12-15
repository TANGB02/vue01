// api管理
import { http } from "../utils/request";

const api = {
  getStuList: "/studentList",
  getMenuListByPage: "/menuListByPage",
  getUsers: "/users",
  getUsersById(id) {
    return `/users/${id}`;
  },
  addUsers: "/users",
  updateUsers(id) {
    return `/users/${id}`;
  },
  deleteUsers(id) {
    return `/users/${id}`;
  },

  getProducts: "/products",
  getProductsById(id) {
    return `/products/${id}`;
  },
  addProducts: "/users",
  updateProducts(id) {
    return `/products/${id}`;
  },
  deleteProducts(id) {
    return `/products/${id}`;
  },
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
export const getUsers = () => {
  return http({
    url: api.getUsers,
    method: "get",
  });
};
export const updateUsers = (id, data = {}) => {
  return http({
    url: api.updateUsers(id),
    method: "put",
    data,
  });
};
export const addUsers = (data = {}) => {
  return http({
    url: api.addUsers,
    method: "post",
    data,
  });
};
export const getUsersById = (id) => {
  return http({
    url: api.getUsersById(id),
    method: "get",
  });
};
export const deleteUsers = (id) => {
  return http({
    url: api.deleteUsers(id),
    method: "delete",
  });
};

export const getProducts = () => {
  return http({
    url: api.getProducts,
    method: "get",
  });
};
export const updateProducts = (id, data = {}) => {
  return http({
    url: api.updateProducts(id),
    method: "put",
    data,
  });
};
export const addProducts = (data = {}) => {
  return http({
    url: api.addProducts,
    method: "post",
    data,
  });
};
export const getProductsById = (id) => {
  return http({
    url: api.getProductsById(id),
    method: "get",
  });
};
export const deleteProducts = (id) => {
  return http({
    url: api.deleteProducts(id),
    method: "delete",
  });
};
