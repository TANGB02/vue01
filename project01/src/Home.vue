<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo"><img src="@/imgs/logo.png" alt="" /></div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-sub-menu key="1">
          <template #title>
            <span>
              <UnorderedListOutlined />
              <span>用户管理</span>
            </span>
          </template>

          <router-link to="/manage/account/manage">
            <pie-chart-outlined />
            <a-menu-item key="1-1">用户信息</a-menu-item>
          </router-link>

          <a-menu-item key="1-2">Tom </a-menu-item>
          <a-menu-item key="1-3">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="2">
          <UnorderedListOutlined />
          <template #title>
            <span>
              <span>商品管理</span>
            </span>
          </template>
          <router-link to="/manage/goods/manage">
            <a-menu-item key="2-1">商品信息</a-menu-item>
          </router-link>

          <a-menu-item key="2-2">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="3">
          <UnorderedListOutlined />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <!-- 退出按钮 -->

      <a-layout-header style="background: #708090; padding: 0">
        <div
          :style="{
            background: 'rgb(190, 200, 200)',
            padding: '2px 2px',
            left: '92%',
          }"
        >
          <a-popconfirm
            title="是否确定退出登录，退出将清除缓存..."
            ok-text="确定"
            cancel-text="取消"
            @confirm="confirm"
            @cancel="cancel"
          >
            <a-button type="primary" ghost>退出</a-button>
          </a-popconfirm>
        </div>
        <!-- 头像 -->
        <div class="title">
          <a-space direction="vertical" :size="32">
            <a-space wrap :size="16">
              <a-avatar size="large">
                <template #icon><UserOutlined /></template>
              </a-avatar>
            </a-space>
          </a-space>
          <span class="str">Hi~ 欢迎登录</span>
        </div>
      </a-layout-header>
      <!-- 面包屑 -->

      <a-breadcrumb style="margin: 16px 16px" separator="/">
        <a-breadcrumb-item
          v-for="(item, index) in $route.matched"
          :key="index"
          :to="{ path: item.path }"
          style="cursor: pointer"
        >
          {{ item.meta.title }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <!-- 内容 -->
      <div
        :style="{
          padding: '24px',
          background: '#fff',
          minHeight: '360px',
          height: '95%',
          position: 'relative',
        }"
      >
        <router-view></router-view>
        <footer>TANG@2023</footer>
      </div>
    </a-layout>
  </a-layout>
</template>
<script setup>
import { ref } from "vue";
import LocalCatch from "@/utils/catch";
import { message } from "ant-design-vue";
import { UnorderedListOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
const collapsed = ref(false);
const selectedKeys = ref(["1"]);
const router = useRouter();
//高亮
console.log(selectedKeys.value);
// 退出
const confirm = (e) => {
  console.log(e);
  message.success("注销成功");
  LocalCatch.clearToken();
  router.push({ path: "/" });
};
</script>
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
<style scoped>
img {
  vertical-align: middle;
  border-style: none;
  width: 100%;
  height: 68px;
}
:where(
    .css-dev-only-do-not-override-1qb1s0s
  ).ant-btn-primary.ant-btn-background-ghost {
  color: #1677ff;
  background-color: transparent;
  border-color: #1677ff;
  box-shadow: none;
  left: 92%;
}
:where(.css-dev-only-do-not-override-1qb1s0s).ant-avatar-lg.ant-avatar-icon {
  font-size: 24px;
  position: absolute;
  top: 13px;
  right: 22%;
}
:where(.css-dev-only-do-not-override-1qb1s0s).ant-layout .ant-layout-footer {
  /* padding: 24px 50px; */
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  background: #f5f5f5;
  line-height: 20px;
}
.str {
  height: 40px;
  line-height: 40px;
  position: absolute;
  top: 13px;
  right: 15%;
  font-size: 16px;
}
.ant-layout-footer {
  width: 1319.2px;
  text-align: center;
}
:where(
    .css-dev-only-do-not-override-185kyl0
  ).ant-btn-primary.ant-btn-background-ghost {
  color: #1677ff;
  background-color: transparent;
  border-color: #1677ff;
  box-shadow: none;
  left: 92%;
}
:where(.css-dev-only-do-not-override-185kyl0).ant-avatar-lg.ant-avatar-icon {
  font-size: 24px;
  position: absolute;
  top: 14px;
  left: 75%;
}
footer {
  position: absolute;
  height: 30px;
  left: 50%;
  bottom: 10px;
}
</style>
