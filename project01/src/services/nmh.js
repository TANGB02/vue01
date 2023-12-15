import { req } from "../utils/request";

const api = {
  login: "/Login",
};
export const login = (data = {}) => {
  return req({
    url: api.login,
    method: "post",
    data,
  });
};
