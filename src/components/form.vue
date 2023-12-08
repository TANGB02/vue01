<template>
  <div>
    <a-form
      layout="inline"
      :model="formData"
      :rules="rules"
      @finish="handleSubmit"
      ref="refForm"
    >
      <a-form-item name="name" label="姓名">
        <a-input v-model:value="formData.name"></a-input>
      </a-form-item>
      <a-form-item name="age" label="年龄">
        <a-input v-model:value="formData.age"></a-input>
      </a-form-item>
      <a-form-item>
        <a-space>
          <a-button html-type="submit">提交</a-button>
          <a-button @click="clickSubmit">提交2</a-button>

          <a-button @click="handleReset">重置</a-button>
        </a-space>
      </a-form-item>
    </a-form>
    {{ formData }}
  </div>
</template>

<script setup>
import { ref } from "vue";
const refForm = ref();
const formData = ref({});
// 自定义验证
const rules = {
  name: [
    { required: true, message: "请输入姓名", trigger: ["blur", "change"] },
    { max: 4, message: "姓名最多输入四个字符", trigger: ["blur", "change"] },
  ],
  age: [
    { required: true, message: "请输入姓名", trigger: "blur" },
    { max: 3, message: "姓名最多输入四个字符", trigger: "blur" },
    {
      type: "integer",
      message: "只能输入数字",
      trigger: "blur",
      transform(value) {
        return Number(value);
      },
    },
  ],
};
// @finish 收集表单数据
const handleSubmit = (value) => {
  console.log(value);
};
// validata触发表单验证, 同 validateFields
const clickSubmit = async () => {
  return await refForm.value.validata();
};
// 重置
const handleReset = () => {
  refForm.value.resetFields();
};
</script>
<style scoped></style>
