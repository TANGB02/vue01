<template>
  <GoodsSearch @handleSearch="searchByGoodsName" @handleReset="reset" />
  <div>
    <a-button type="primary" @click="showModal" class="btn">新增</a-button>
    <!-- <a-button type="primary" @click="reset" class="btn">重置</a-button> -->
    <a-modal
      v-model:open="isOpen"
      :title="formData.id ? '编辑商品' : '新增商品'"
      @ok="handleOk"
    >
      <a-form :model="formData" :rules="rules">
        <a-form-item name="name" label="商品名称">
          <a-input v-model:value="formData.name"></a-input>
        </a-form-item>
        <a-form-item name="price" label="价格">
          <a-input v-model:value="formData.price"></a-input>
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
          <a-button @click="() => editGoods(obj.record)">编辑</a-button>
          <a-button @click="() => deleteGoods(obj.record.id)">删除</a-button>
        </div>
      </template>
    </a-table>
  </div>
</template>

<script setup>
import {
  getProducts,
  addProducts,
  getProductsById,
  deleteProducts,
  updateProducts,
} from "../../services/stu";
import { ref } from "vue";
import { message } from "ant-design-vue";
import GoodsSearch from "./goodsSearch.vue";
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
  },
  {
    title: "价格",
    dataIndex: "price",
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
  const res = await getProducts({
    pageNumber: pagination.value.current,
    pageSize: pagination.value.pageSize,
  });

  dataSource.value = res.data.data.record;
  // pagination.value.total = res.data.data.totalItems;
  pagination.value.total = res.data.data.record.length;
};
getData();

//监听分页器
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
const editGoods = (record) => {
  isOpen.value = true;
  formData.value.name = record.name;
  formData.value.price = record.price;
  formData.value.id = record.id;
};
// 判断  新增/修改  (id)
const handleOk = async () => {
  if (formData.value.id) {
    //编辑
    await updateProducts(formData.value.id, formData.value);
    message.success("修改成功");
  } else {
    // 新增
    await addProducts(formData.value);
    pagination.current = 1;
    message.success("新增成功");
  }
  getData();
  isOpen.value = false;
  formData.value = {};
};

//删除
const deleteGoods = async (id) => {
  await deleteProducts(id);
  message.success("删除成功");
  getData();
};
//模糊查询（商品名）
const searchByGoodsName = (goodsName) => {
  console.log(goodsName);
  console.log(dataSource.value);

  dataSource.value = dataSource.value.filter((item) => {
    return item.name.includes(goodsName);
  });
  pagination.value.current = 1;
  pagination.value.pageSize = 10;
  pagination.value.total = dataSource.value.length;
  // console.log(pagination.value.total);
};
//重置
const reset = (a) => {
  getData();
};
// 表单校验
//自定义的邮箱和手机验证规则

const rules = {
  name: [
    { required: true, message: "请输入商品名称", trigger: "blur" },
    { max: 10, message: "商品名称超过最大长度", trigger: "blur" },
  ],
  price: [
    { required: true, message: "请输入价格", trigger: "blur" },
    {
      type: "integer",
      message: "请输入整数",
      trigger: "blur",
      Transform(value) {
        return parseInt(value);
      },
    },
  ],
};
</script>
<style scoped>
.btn {
  margin: 15px;
}
</style>
