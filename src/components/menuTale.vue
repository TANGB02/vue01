<template>
  <div>
    <a-table
      :columns="columns"
      :dataSource="dataSource"
      :pagination="pagination"
      @change="handleTableChange"
    >
      <template #bodyCell="obj">
        <div v-if="obj.column.dataIndex === 'todo'">
          <a-button>编辑</a-button>
        </div>
      </template>
    </a-table>
  </div>
</template>

<script setup>
import { getMenuListByPage } from "../services/stu";
import { ref } from "vue";
const columns = [
  {
    title: "菜名",
    dataIndex: "name",
  },
  {
    title: "价格",
    dataIndex: "price",
  },
  {
    title: "操作",
    dataIndex: "todo",
  },
];
const pagination = ref({
  current: 1,
  total: 0,
  pageSize: 10,
});
const dataSource = ref([]);
const getData = async () => {
  const res = await getMenuListByPage({
    pageNumber: pagination.value.current,
    pageSize: pagination.value.pageSize,
  });

  dataSource.value = res.data.data.record;
  pagination.value.total = res.data.data.totalItems;
};
getData();

const handleTableChange = (pageObj) => {
  // console.log(pageObj);
  pagination.value = pageObj;
  getData();
};
</script>
<style scoped></style>
