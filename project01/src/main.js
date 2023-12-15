import { createApp } from "vue";
import App from "./App.vue";
import Home from "./Home.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import About from "./components/About.vue";
import router from "./router.config";
import AntdV from "ant-design-vue";
import "ant-design-vue/dist/reset.css"; //清除浏览器的默认样式
import Index from "@/index.vue";
import { createPinia } from "pinia";
const store = createPinia();
//启动项
const app = createApp(Index);

// app.component("About", About);
//注册路由
app.use(router);
//注册ElementPlus
app.use(ElementPlus);
//注册AntdV
app.use(AntdV);
app.use(store);
app.mount("#app");
