<template>
  <div>
    <a-form
      :model="dataSources"
      @finish="successFinish"
      layout="inline"
      ref="formRef"
      :rules="rules"
    >
      <a-form-item label="姓名" name="username">
        <a-input v-model:value="dataSources.username" />
      </a-form-item>
      <a-form-item label="邮箱" name="email">
        <a-input v-model:value="dataSources.email" />
      </a-form-item>
      <a-form-item>
        <a-space>
          <a-button @click="Search">搜索</a-button>
          <!-- <a-button html-type="submit">提交</a-button> -->
          <a-button @click="handleReset">重置</a-button>
        </a-space>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineEmits } from "vue";
const dataSources = ref({});
const formRef = ref();
const emit = defineEmits(["handleSearch", "handleReset"]);
const Search = () => {
  emit("handleSearch", dataSources.value.username);
};
let checkEmail = (rule, value, callback) => {
  //验证邮箱
  const regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  if (
    dataSources.value.email != "" &&
    !regEmail.test(dataSources.value.email)
  ) {
    callback(new Error("请输入有效的邮箱"));
  }
};
const rules = {
  username: [
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
  email: [
    { required: true, message: "请输入邮箱", trigger: "blur" },
    {
      validator: checkEmail,
      message: "输入格式不正确",
      trigger: "blur",
    },
  ],
};

const handleReset = () => {
  formRef.value.resetFields();
  emit("handleReset", "");
};
const successFinish = (value) => {
  console.log(value);
};
</script>
<style scoped></style>
