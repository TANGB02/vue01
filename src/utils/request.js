import axios from "axios";
const http = axios.create({
  baseURL: "http://study.zmyfrank.com",
});
export default http;
