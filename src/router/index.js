import Home from "../components/Home.vue";
import About from "../components/About.vue";
import NotFound from "../components/NotFound.vue";
import UserWrapper from "../components/嵌套路由/包裹.vue";
import UserList from "../components/嵌套路由/列表.vue";
import UserData from "../components/嵌套路由/详情.vue";
import Table from "../components/前端大作业.vue";
const List = () => import("../components/路由懒加载/list.vue");
const Details = () => import("../components/路由懒加载/details.vue");
const home = () => import("../components/路由懒加载/home.vue");
const menuTale = () => import("../components/menuTale.vue");
const UserManage = () => import("@/components/pages/UserManage.vue");

const routes = [
  //Home.vue--面包屑
  {
    path: "/",
    name: "home",
    component: () => import("@/Home.vue"),
    meta: { title: "首页" },
  },
  {
    path: "",
    name: "",
    component: () => import("@/components/pages/home.vue"),
    meta: { title: "默认页" },
  },
  {
    path: "/account",
    name: "account",
    meta: { title: "用户管理" },
    children: [
      {
        path: "manage",
        name: "user-manage",
        component: UserManage,
        meta: { title: "用户信息" },
      },
    ],
  },

  {
    path: "/goods",
    name: "goods",
    meta: { title: "商品管理" },
    children: [
      {
        path: "manage",
        name: "goods-manage",
        component: () => import("@/components/pages/goods.vue"),
        meta: { title: "商品信息" },
      },
    ],
  },

  // {
  //   path: "/form",
  //   name: "form",
  //   component: () => import("@/components/form.vue"),
  // },
  {
    path: "/menuTale",
    name: "menuTale",
    component: menuTale,
  },

  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/user",
    name: "user",
    component: UserWrapper,
    children: [
      {
        path: "userList",
        name: "列表",
        component: UserList,
      },
      {
        path: "userData",
        name: "详情",
        component: UserData,
      },
    ],
  },
  { path: "/stuTable", name: "table", component: Table },

  {
    path: "/:catchAll(.*)",
    name: "404",
    component: NotFound,
  },
  {
    path: "/stu",
    name: "home",
    component: home,
    children: [
      {
        path: "list",
        name: "List",
        component: List,
      },
      {
        path: "details",
        name: "Details",
        component: Details,
      },
    ],
  },
];

export default routes;
