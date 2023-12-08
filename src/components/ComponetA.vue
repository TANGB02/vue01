<template>
  <div>componentA</div>
  <button @click="fatherClick">我是子组件按钮</button>
</template>

<script setup>

const emits = defineEmits(["handleclickA"]); //获取

const fatherClick = () => {
  emits("handleclickA"); //使用
};

//子传父
const handleclick = () => {
  console.log("componentA被点击了");
};
let a = 0;
defineExpose({
  handleclick,
  a,
});
</script>
<style scoped></style>
