<template>
  <div>Main.js</div>
  <button @click="handleConext">父组件按钮</button>
  <ComponetA @handleclickA="handleclickA" ref="ChildsDom"></ComponetA>
</template>

<script setup>
import { ref } from "vue";
import ComponetA from "./ComponetA.vue";
// 父传子
const ChildsDom = ref(null);
const handleclickA = () => {
  console.log("我是父组件过来的");
};
//子传父
const handleConext = () => {
  ChildsDom.value.handleclick();
  let b = ChildsDom.value.a++;
  console.log(ChildsDom.value);
  console.log(b);
};
</script>
<style scoped></style>
