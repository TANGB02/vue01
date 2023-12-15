<template>
  <Search @handleSearch="searchByUserName" @handleReset="reset" />
  <div>
    <a-button type="primary" @click="showModal" class="btn">新增</a-button>
    <!-- <a-button type="primary" @click="reset" class="btn">重置</a-button> -->
    <a-modal
      v-model:open="isOpen"
      :title="formData.id ? '编辑用户' : '新增用户'"
      @ok="handleOk"
    >
      <a-form :model="formData" :rules="rules">
        <a-form-item name="username" label="姓名">
          <a-input v-model:value="formData.username"></a-input>
        </a-form-item>
        <a-form-item name="email" label="邮箱">
          <a-input v-model:value="formData.email"></a-input>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
  <div>
    <a-table
      :columns="columns"
      :dataSource="dataSource"
      :pagination="pagination"
      @change="handleTableChange"
    >
      <template #bodyCell="obj">
        <div v-if="obj.column.dataIndex === 'todo'">
          <a-button @click="() => editUser(obj.record)">编辑</a-button>
          <a-button @click="() => deleteUser(obj.record.id)">删除</a-button>
        </div>
      </template>
    </a-table>
  </div>
</template>

<script setup>
import {
  getUsers,
  addUsers,
  getUsersById,
  deleteUsers,
  updateUsers,
} from "../services/stu";
import { ref } from "vue";
import { message } from "ant-design-vue";
import Search from "../components/pages/search.vue";
const columns = [
  {
    title: "姓名",
    dataIndex: "username",
  },
  {
    title: "邮箱",
    dataIndex: "email",
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
  const res = await getUsers({
    pageNumber: pagination.value.current,
    pageSize: pagination.value.pageSize,
  });

  dataSource.value = res.data.data.record;
  // pagination.value.total = res.data.data.totalItems;
  pagination.value.total = res.data.data.record.length;
  console.log(res.data.data.record.length);
};
getData();

const handleTableChange = (pageObj) => {
  // console.log(pageObj);
  pagination.value = pageObj;
  getData();
};

const formData = ref({});
const isOpen = ref(false);
const showModal = () => {
  isOpen.value = true;
  formData.value = {};
};

// 回显
const editUser = (record) => {
  isOpen.value = true;
  // formData.value.username = record.username;
  // formData.value.email = record.email;
  // formData.value.id = record.id;
  formData.value = { ...record };
};
// 判断  新增/修改  (id)
const handleOk = async () => {
  if (formData.value.id) {
    //编辑
    await updateUsers(formData.value.id, formData.value);
    message.success("修改成功");
  } else {
    // 新增
    await addUsers(formData.value);
    pagination.current = 1;
    message.success("新增成功");
  }
  getData();
  isOpen.value = false;
  formData.value = {};
};

//删除
const deleteUser = async (id) => {
  await deleteUsers(id);
  message.success("删除成功");
  getData();
};
//模糊查询（姓名）
const searchByUserName = (userName) => {
  // console.log(userName);
  dataSource.value = dataSource.value.filter((item) =>
    item.username.includes(userName)
  );
  pagination.value.current = 1;
  pagination.value.pageSize = 10;
  pagination.value.total = dataSource.value.length;
  // console.log(pagination.value.total);
};
//重置
const reset = (a) => {
  pagination.value.current = 1;
  pagination.value.pageSize = 10;
  getData();
};
// 表单校验
//自定义的邮箱和手机验证规则
let checkEmail = (rule, value, promise) => {
  //验证邮箱
  const regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  if (formData.value.email != "" && !regEmail.test(formData.value.email)) {
    promise(new Error("请输入有效的邮箱"));
  }
};
const rules = {
  username: [
    { required: true, message: "请输入姓名", trigger: ["blur", "change"] },
    { max: 10, message: "姓名超过最大长度", trigger: ["blur", "change"] },
  ],
  email: [
    { required: true, message: "请输入邮箱", trigger: "blur" },
    {
      validator: checkEmail,
      message: "输入格式不正确",
      trigger: "blur",
    },
  ],
};
</script>
<style scoped>
.btn {
  margin: 15px;
}
</style>
