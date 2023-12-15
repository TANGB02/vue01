<!-- 目的：嵌套请求 -->
<template>
  <div v-for="(item, index) in a" :key="index">{{ item.name }}</div>
</template>
<script setup>
import { ref } from "vue";
const a = ref([]);
const getId = () => {
  return new Promise((resolve, reject) => {
    // 异步回调
    setTimeout(
      resolve(
        2
        // [
        // { name: "宫保鸡丁", count: 20 },
        // { name: "饺子", count: 29 },
        // ]
      ),
      2000
    );
  });
};
const getList = (id) => {
  return new Promise((resolve, reject) => {
    // 异步回调
    setTimeout(() => {
      resolve(
        // 模拟json数据
        { data: [{ name: "xiaoming" }, { name: "xiaohong" }] }
      );
    }, 2000);
  });
};
getId()
  .then(
    (res) => {
      // a.value = res;

      return getList(res);
    },
    (err) => {
      console.log(err);
    }
  )
  .then(
    (res) => {
      // 第二个promise的成功回调
      console.log(res);
      console.log(res.data[0].name);
    },
    (err) => {}
  );
</script>
<style scoped></style>
