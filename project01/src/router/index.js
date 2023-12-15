/*
 * @Author: TANGB02 13233582+Ace-Tang@user.noreply.gitee.com
 * @Date: 2023-11-20 15:45:22
 * @LastEditors: TANGB02 13233582+Ace-Tang@user.noreply.gitee.com
 * @LastEditTime: 2023-12-15 10:25:03
 * @FilePath: \VUE\源码\project01\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
  {
    path: "/",
    name: "homePage",
    component: () => import("../components/pages/home/homePage.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/pages/logn/login.vue"),
  },
  //Home.vue--面包屑
  {
    path: "/manage",
    name: "manage",
    component: () => import("@/Home.vue"),
    meta: { title: "首页" },
    //独享守卫
    children: [
      // 二级路由
      {
        path: "",
        name: "",
        component: () => import("@/components/pages/home.vue"),
        meta: { title: "默认页" },
      },
      {
        path: "account",
        name: "account",
        meta: { title: "用户管理" },
        children: [
          // 三级路由
          {
            path: "manage",
            name: "user-manage",
            component: UserManage,
            meta: { title: "用户信息" },
          },
        ],
      },
      {
        path: "goods",
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
    ],
  },

  // 其他路由
  // {
  //   path: "/form",
  //   name: "form",
  //   component: () => import("@/components/form.vue"),
  // },
  //   {
  //     path: "/menuTale",
  //     name: "menuTale",
  //     component: menuTale,
  //   },

  //   {
  //     path: "/About",
  //     name: "About",
  //     component: About,
  //   },
  //   {
  //     path: "/user",
  //     name: "user",
  //     component: UserWrapper,
  //     children: [
  //       {
  //         path: "userList",
  //         name: "列表",
  //         component: UserList,
  //       },
  //       {
  //         path: "userData",
  //         name: "详情",
  //         component: UserData,
  //       },
  //     ],
  //   },
  //   { path: "/stuTable", name: "table", component: Table },

  //   {
  //     path: "/:catchAll(.*)",
  //     name: "404",
  //     component: NotFound,
  //   },
  //   {
  //     path: "/stu",
  //     name: "home",
  //     component: home,
  //     children: [
  //       {
  //         path: "list",
  //         name: "List",
  //         component: List,
  //       },
  //       {
  //         path: "details",
  //         name: "Details",
  //         component: Details,
  //       },
  //     ],
  //   },
];

export default routes;
