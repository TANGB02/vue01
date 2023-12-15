<template>
  <div class="form-login">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="用户名"
        name="userName"
        :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]"
      >
        <a-input v-model:value="formState.userName" />
      </a-form-item>

      <a-form-item
        label="密码"
        name="userPassword"
        :rules="[{ required: true, message: '请输入你密码', trigger: 'blur' }]"
      >
        <a-input-password v-model:value="formState.userPassword" />
      </a-form-item>

      <a-form-item>
        <a-checkbox>记住密码</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 20 }">
        <a-button type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { login } from "../../../services/nmh";
import { useRouter } from "vue-router";
import LocalCatch from "@/utils/catch";
import { message } from "ant-design-vue";
import md5 from "js-md5";
const formState = reactive({
  userName: "",
  userPassword: "",
});
const router = useRouter();
const onFinish = async (values) => {
  console.log("Success:", values);
  // md5加密
  // values.userPassword = md5(values.userPassword);
  // console.log(values.userPassword);

  // 登录
  await login({ ...values }).then(
    (res) => {
      if (res.code === 1) {
        router.push({ path: "/manage" });
        const token = res.data;
        console.log(res);
        console.log("token:");
        console.log(token);
        LocalCatch.setToken("token", token);
        const a = LocalCatch.getToken("token");
        console.log(a);
        message.success("登陆成功");
      }
    },
    (err) => {
      console.log(err);
    }
  );
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>
<style scoped>
* {
  margin: 0%;
  padding: 0%;
}

.form-login {
  position: absolute;
  height: 60px;
  width: 300px;
  left: 40%;
  top: 45%;
}
</style>
