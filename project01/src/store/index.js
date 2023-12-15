import { defineStore } from "pinia";
import { computed, ref } from "vue";
/**
 * @description:pinia =>状态管理 =>在 Setup Store 中：后者为option style写法
ref() 就是 state 属性
computed() 就是 getters
function() 就是 actions
ddddsss
 * @return {*}
 */
// setup style
export default defineStore("todolist", () => {
  const todolist = ref([]);
  const count = computed(() => todolist.value.length);

  function addTodo(todo) {
    todolist.value.unshift(todo);
  }
  function toggleTodo(id) {
    todolist.value = todolist.value.map((todo) => {
      if (todo.id === id) {
        todo.computed = !todo.computed;
      }
      return todo;
    });
  }
  function remove(id) {
    todolist.value = todolist.value.filter((todo) => todo.id !== id);
  }
  return { count, addTodo, remove, toggleTodo, todolist };
});
