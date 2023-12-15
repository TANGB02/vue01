<template>
  <div>
    <table>
      <thead>
        <td>账号</td>
        <td>姓名</td>
        <td>手机号</td>
        <td>角色</td>
        <td>用户状态</td>
        <td>操作</td>
      </thead>
      <tr v-for="(item, index) in dataArray" :key="index">
        <td>{{ item.account }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.role }}</td>
        <td>{{ item.手机号 }}</td>
        <td>{{ item.用户状态 }}</td>
        <td>
          <span>修改|</span>
          <span>重置密码</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
const dataArray = [
  {
    account: "YZ0001",
    name: "系统管理员",
    手机号: "18000000000",
    role: "系统管理员",
    用户状态: "启用",
  },
  {
    account: "YZ0002",
    name: "用户2",
    手机号: "18011111111",
    role: "记录员",
    用户状态: "启用",
  },
  {
    account: "YZ0003",
    name: "用户3",
    手机号: "18022222222",
    role: "畜牧管理员",
    用户状态: "禁用",
  },
  {
    account: "YZ0004",
    name: "用户4",
    手机号: "18033333333",
    role: "系统管理员",
    用户状态: "启用",
  },
  {
    account: "YZ0005",
    name: "用户5",
    手机号: "18044444444",
    role: "记录员",
    用户状态: "禁用",
  },
  {
    account: "YZ0006",
    name: "用户6",
    手机号: "18055555555",
    role: "畜牧管理员",
    用户状态: "启用",
  },
  {
    account: "YZ0007",
    name: "用户7",
    手机号: "18066666666",
    role: "系统管理员",
    用户状态: "禁用",
  },
  {
    account: "YZ0008",
    name: "用户8",
    手机号: "18077777777",
    role: "记录员",
    用户状态: "启用",
  },
  {
    account: "YZ0009",
    name: "用户9",
    手机号: "18088888888",
    role: "畜牧管理员",
    用户状态: "禁用",
  },
  {
    account: "YZ0010",
    name: "用户10",
    手机号: "18099999999",
    role: "系统管理员",
    用户状态: "启用",
  },
];
</script>
<style scoped></style>
