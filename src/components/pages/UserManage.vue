<template>
  <div>
    <a-form
      :model="dataSources"
      @finish="successFinish"
      layout="inline"
      ref="formRef"
      :rules="rules"
    >
      <a-form-item label="姓名" name="name">
        <a-input v-model:value="dataSources.name" />
      </a-form-item>
      <a-form-item label="年龄" name="age">
        <a-input v-model:value="dataSources.age" />
      </a-form-item>
      <a-form-item>
        <a-button>搜索</a-button>
        <a-space>
          <a-button html-type="submit">提交</a-button>
          <a-button @click="handleReset">重置</a-button>
        </a-space>
      </a-form-item>
    </a-form>
    <!-- 表格 -->
    <div class="table">
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
  </div>
</template>

<script setup>
import { getMenuListByPage } from "@/services/stu";
import { ref } from "vue";
const dataSources = ref({});
const formRef = ref();
const rules = {
  name: [
    {
      required: true,
      message: "请输入姓名",
      trigger: "blur",
    },
    {
      max: 18,
      message: "超过最大长度",
      trigger: "blur",
    },
  ],
  age: [
    {
      required: true,
      message: "请输入年龄",
      trigger: "blur",
    },
    {
      max: 18,
      message: "请输入6~18位字符",
      trigger: "blur",
    },
    {
      min: 6,
      message: "请输入6~18位字符",
      trigger: "blur",
    },
    {
      type: "number",
      message: "请输入正确的类型",
      trigger: "blur",
      transform(value) {
        return Number(value);
      },
    },
  ],
};

const handleReset = () => {
  formRef.value.resetFields();
};
const successFinish = (value) => {
  console.log(value);
};

// 表格数据
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
