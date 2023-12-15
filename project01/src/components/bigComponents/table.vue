<template>
  <h2>{{ props.dataObj.notFound.value }}</h2>
  <tr v-for="(item, index) in props.dataObj.newStu.value" :key="index">
    <td>{{ item.number }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.class }}</td>
    <td>{{ item.gender }}</td>
    <td class="detail" @click="toDetails">查看详情</td>
  </tr>
</template>

<script setup>
import { defineProps, watchEffect } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  dataObj: {
    newStu: {
      type: Array,
    },
    notFound: {
      type: String,
    },
  },
});
const toDetails = () => {
  router.push({ name: "Details", query: { id: 1 } });
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  height: 100%;
}
.tr {
  font-size: 18px;
  line-height: 18px;
  text-align: center;
}

td {
  width: 25%;
  padding: 10px 40px;
  border-bottom: 1px solid black;
}
h2 {
  position: absolute;
  left: 40%;
  top: 40%;
}
.detail {
  cursor: pointer;
}
</style>
