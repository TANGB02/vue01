import { createRouter, createWebHistory } from "vue-router";
import routes from "./router/index";

const router = createRouter({
  // 这里使用hash模式路由
  history: createWebHistory(),
  routes,
});
//全局路由守卫
export default router;
