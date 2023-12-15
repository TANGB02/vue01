<template>
  <!-- <div>组件通信</div>
  <Parent /> -->
  <div>
    <!-- <Project02 /> -->
    <!-- <Project03 /> -->
    <!-- <Main /> -->
    <component :is="typeCoponentMap[params.type]"></component>
    <button @click="changeHandle">点击切换组件</button>
  </div>
</template>

<script setup>
import Parent from "./components/parent.vue";
import Project02 from "./components/project02.vue";
import Project03 from "./components/project03.vue";
import Main from "./components/Main.vue";
import Slots from "./components/slots.vue";
import ConponentB from "./components/ConponetB.vue";
import ConponentC from "./components/ConponentC.vue";
import { reactive } from "vue";
const params = reactive({
  type: 1,
});
const typeCoponentMap = {
  1: ConponentB,
  2: ConponentC,
};
const changeHandle = () => {
  params.type = params.type == 1 ? 2 : 1;
};
</script>
<style scoped></style>
