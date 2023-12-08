<template>
  <div>
    <button @click="addDishes" for="add">新增菜</button>
    <input
      ref="v"
      type="text"
      id="add"
      v-model="dishesName"
      @blur="clear"
      @keyup.enter="addDishes"
      placeholder="请输入菜名"
    />
  </div>
  <div v-for="(item, index) in dishes" :key="index">
    <span>{{ index + 1 }}-{{ item }}</span>
    <button @click="() => deletedishes(index)">删除</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const dishes = ref([]);
const v = ref();
let dishesName = "";

const addDishes = () => {
  if (dishesName !== "") {
    dishes.value.push(dishesName);
  } else {
    alert("请输入菜名");
  }
};
const deletedishes = (index) => {
  dishes.value.splice(index, 1);
};
const clear = () => {
  setTimeout(() => {
    // v.value.value = ""; //注意：使用v-model时，修改变量不会直接修改表单的value值
    dishesName = "";
    console.log(typeof v.value.value);
    console.log(v.value.value);
  }, 500);
};
</script>
<style scoped></style>
