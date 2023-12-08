<template>
  <div>
    <header>通用头部</header>
    <div class="to">
      <router-link to="/stu/List" class="to1">点击跳转到列表</router-link>
      <router-link to="/stu/Details" class="to1">点击跳转到详情</router-link>
    </div>

    <main>
      <!-- 子路由出口 -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup></script>
<style scoped>
.header {
  height: 50px;
  padding: 20px;
  text-align: center;
  background-color: aqua;
}
.to .to1 {
  margin: 20px;
}
</style>
