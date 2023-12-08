<template>
  <div class="contain">
    <From @handleStr="setNewStu" @reset="reset" />
    <table>
      <thead>
        <td v-for="(item, index) in th" :key="index">{{ item }}</td>
      </thead>
      <Tables :dataObj="dataObj" />
    </table>
  </div>
</template>

<script setup>
import { getStuList } from "../services/stu";
import { onMounted, ref } from "vue";
import From from "./bigComponents/form.vue";
import Tables from "./bigComponents/table.vue";
let stu = ref([]);
let newStu = ref([]);
const th = ["学号", "姓名", "班级", "性别"];

let notFound = ref("");
//传递给table组件数据
const dataObj = {
  newStu,
  notFound,
};
onMounted(() => {
  getStuList().then(
    (res) => {
      console.log(res);
      stu.value = res.data.data;
      newStu.value = res.data.data;
    },
    (err) => {
      console.log("全部查询失败");
    }
  );
});
//筛选结果
const setNewStu = (str) => {
  console.log(str);
  newStu.value = stu.value.filter((item) => item.name.indexOf(str) != -1);
  //查询结果为空
  if (newStu.value.length === 0) {
    notFound.value = "未查询到记录...";
  } else notFound.value = "";
};
//重置
const reset = () => {
  // 重新渲染数组
  newStu.value = stu.value;
  notFound.value = "";
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  height: 100%;
}
table {
  border-collapse: collapse;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  width: 1440px;
}
td {
  width: 25%;
  padding: 10px 80px;
  border-bottom: 1px solid black;
}
</style>
