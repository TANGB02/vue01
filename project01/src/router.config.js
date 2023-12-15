import { createRouter, createWebHistory } from "vue-router";
import routes from "./router/index";
import LocalStorage from "@/utils/catch";
import { message } from "ant-design-vue";
const router = createRouter({
  // 这里使用hash模式路由
  history: createWebHistory(),
  routes,
});
//全局路由守卫
router.beforeEach((to, from, next) => {
  //访问需要授权的页面时，如果没有登录，则跳转到登录界面
  const token = LocalStorage.getToken("token");

  if (token || to.path === "/login" || to.path === "/") {
    // console.log("已验证");
    next();
  } else {
    console.log("未验证，请先登录");
    message.error("您还没有登录，请先登录");
    return next("/login");
  }
});

export default router;
