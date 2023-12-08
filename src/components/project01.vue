<script>
import Home from "./components/Home.vue";
import { reactive, ref } from "vue";
export default {
  data() {
    return {
      names: ["哈哈", "大明", "你好啊"],
      count: 0,
      classObject: { active: true },
      num1: [1, 2, 3, 4, 5],
      num2: [7, 8, 9, 10],
      content: "内容",
    };
  },
  methods: {
    change() {
      this.$refs.change.innerHTML = "Hello";
      console.log(this.$refs.change);
    },
    getNunber() {
      this.count++;
    },
    getName(name, e) {
      console.log(name);
      console.log(e);
    },
    clickHandle(e) {
      e.preventDefault();
      console.log("点击了");
    },
    concatArr() {
      this.num1 = this.num1.concat(this.num2);
    },
  },

  components: {
    Home,
  },
};
</script>

<template>
  <!-- 组件的局部注册 -->
  <Home />
  <p @click="getNunber" :class="classObject">点击我：{{ count }}</p>
  <p @click="getName(item, $event)" v-for="(item, index) in names" :key="idnex">
    {{ item }}
  </p>
  <a @click="clickHandle" href="https://www.baidu.com">百度</a>

  <button @click="concatArr">合并数组</button>
  <div ref="change">{{ content }}</div>
  <button @click="change">获取元素</button>
  <p>数组一</p>
  <p v-for="(item, index) in num1" :key="index">{{ item }}</p>
  <p>数组二</p>
  <p v-for="(item, index) in num2" :key="index">{{ item }}</p>
  <!-- 组件的全局注册 -->
  <About />
</template>

<style>
.active {
  cursor: pointer;
}
</style>
