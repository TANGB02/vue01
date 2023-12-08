<template>
  <div>
    <div class="nav">
      <label for="search"> 姓名 </label>
      <input type="text" id="search" placeholder="请输入姓名" v-model="str" />
      <button @click="search" class="search">搜索</button>
      <button @click="reset">重置</button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
import { ref } from "vue";
const str = ref("");
const newStu = [];
const props = defineProps({
  modelValue: {
    type: String,
  },
});

// 模糊查询
const emit = defineEmits(["handleStr", "reset"]);
const search = () => {
  emit("handleStr", str.value);
};

const reset = () => {
  // location.reload();
  emit("reset", 1);
};
</script>
<style scoped>
.search {
  margin: 20px;
}
</style>
