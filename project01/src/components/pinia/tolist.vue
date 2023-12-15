<!--
 * @Author: TANGB02 13233582+Ace-Tang@user.noreply.gitee.com
 * @Date: 2023-12-14 16:15:02
 * @LastEditors: TANGB02 13233582+Ace-Tang@user.noreply.gitee.com
 * @LastEditTime: 2023-12-14 16:37:37
 * @FilePath: \VUE\源码\project01\src\components\pinia\tolist.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>todolist</div>
</template>

<script setup>
import useStore from "@/store/index";
const store = useStore();
// 防止解构丧失响应式----storeToRefs()   function 可以直接解构
const { todolist } = storeToRefs(store);

// console.log(store);
</script>
<style scoped></style>
