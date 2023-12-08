<template>
  <div>
    <button @click="getList">点击发送</button>
  </div>
</template>

<script setup>
import axios from "axios";

const getList = () => {
  console.log(1);
  axios({
    url: "http://192.168.43.115:8080/Vue",
    method: "post",
    data: { id: 1, username: "小黑", password: 111 },
  }).then(
    (res) => {
      //   debugger;
      console.log(res);
    },
    (err) => {
      console.log("失败");
    }
  );
};
</script>
<style scoped></style>
