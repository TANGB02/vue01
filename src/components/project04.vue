<template>
  <div>
    <div>您选择的是：{{ op }}</div>
    <select v-model="op">
      <option disabled value="">请选泽：</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
      <option>D</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";

const op = ref("");
</script>
<style scoped></style>
