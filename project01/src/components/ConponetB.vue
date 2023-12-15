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
  <ConponentC :dis="dishes" @getChild="getChild" />
</template>

<script setup>
import ConponentC from "./ConponentC.vue";
import { ref } from "vue";
const dishes = ref([]);
const v = ref();
let dishesName = "";
const addDishes = () => {
  if (dishesName !== "") {
    dishes.value.push(dishesName);
    // console.log(dishes.value);
  } else {
    alert("请输入菜名");
  }
};

const clear = () => {
  setTimeout(() => {
    v.value.value = ""; //注意：使用v-model时，修改变量不会直接修改表单的value值
    dishesName = "";
    // console.log(typeof v.value.value);
    // console.log(v.value.value);
  }, 500);
};

const msg = "我是父组件过来的";

//子传父
const getChild = (index) => {
  dishes.value.splice(index, 1); //splice返回的是删除的元素
  // console.log(delArr);
  // debugger;
  // dishes.value = delArr;

  // console.log(dishes.value);
};
</script>
<style scoped></style>
