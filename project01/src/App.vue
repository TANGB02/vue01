<template>
  <div>
    <router-link to="/" class="to">Home </router-link>
    <router-link to="/About" class="to">About </router-link>
    <router-link to="/User" class="to">嵌套路由</router-link>
    <router-link to="/stuTable" class="to">学生信息查询</router-link>
    <router-link to="/stu"> home</router-link>
    <router-link to="/menuTale" class="to"> menuTale</router-link>
    <router-link to="/form" class="to"> form </router-link>
  </div>

  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <!-- <BigPro /> -->
  <!-- <Antd01 /> -->
</template>

<script setup>
import Axios from "./components/axios.vue";
import promise from "./components/promise.vue";
import Home from "./components/Home.vue";
import Parent from "./components/parent.vue";
import Project02 from "./components/project02.vue";
import Project03 from "./components/project03.vue";
import Main from "./components/Main.vue";
import BigPro from "./components/前端大作业.vue";
import ConponentB from "./components/ConponetB.vue";
import ConponentC from "./components/ConponentC.vue";
import project04 from "./components/project04.vue";
import Antd01 from "./components/antd布局.vue";
</script>
<style scoped>
.to {
  margin: 5px 20px;
}
</style>
