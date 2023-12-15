<template>
  <div v-for="(item, index) in dis" :key="index">
    <span>{{ index + 1 }}--{{ item }}</span>
    <button @click="() => deletedishes(index)">删除</button>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, computed } from "vue";
//父传子
let $emits = defineEmits(["getChild"]);
const props = defineProps({
  dis: {
    //参数检验
    type: Array,
    required: false,
    default: [],
  },
});
// let delArr = computed(() => props.dis.splice(index, 1));
const deletedishes = (index) => {
  // let delArr = computed(() => props.dis.splice(index, 1));
  // debugger;
  // let delArr = props.dis.splice(index, 1);
  // console.log(delArr);
  // console.log(props.dis);
  $emits("getChild", index);
};
//子传父
</script>
<style scoped></style>
