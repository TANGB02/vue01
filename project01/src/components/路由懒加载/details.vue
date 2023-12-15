<template>
  <div>
    这里是details
    {{ query }}
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
//获取当前query对象中的属性和值 类型：String
const query = router.currentRoute.value.query;
console.log("query:", query);
</script>
<style scoped></style>
