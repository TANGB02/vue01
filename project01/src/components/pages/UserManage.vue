<template>
  <div>
    <!-- 表格数据 -->
    <MenuTable />
  </div>
</template>

<script setup>
import { getMenuListByPage } from "@/services/stu";
import MenuTable from "@/components/menuTale.vue";
</script>
<style scoped></style>
