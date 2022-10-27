<template>
  <div>
    <a-card class="qwe">
      <div class="tag">
        <HomeFilled /> {{ TabMenu }}
      </div>
      <div class="search">
        <a-button type="primary">+新增</a-button>
        <a-input v-model:value="formState.fullName" placeholder="请输入企业名称" />
      </div>
    </a-card>
    <a-card>
      <a-table :columns="columns" :data-source="TableData">
        <template #operation>
          <a-button type="link">库房</a-button>
          <a-button type="link">修改</a-button>
          <a-button type="link" danger>删除</a-button>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted, reactive, ref, UnwrapRef } from 'vue';
import { HomeFilled } from '@ant-design/icons-vue';
import { useRouter } from "vue-router";
import request from '../../request'


const columns = [
  {
    title: '序号',
    dataIndex: '__v',
    key: "__v",
    width: '5%',
  },
  {
    title: '企业全称',
    dataIndex: 'fullName',
    key: "fullName",
    width: '19%',
  },
  {
    title: '企业简称',
    dataIndex: 'abbreViation',
    key: "abbreViation",
    width: '19%',
  },
  {
    title: '质量管理员',
    dataIndex: 'admin',
    key: "admin",
    width: '19%',
  },
  {
    title: '联系电话',
    dataIndex: 'adminPhone',
    key: "adminPhone",
    width: '19%',
  },
  {
    title: '操作',
    key: 'operation',
    slots: { customRender: 'operation' },
    width: '19%',
  },
];

const router = useRouter();
const TabMenu = ref(router.currentRoute.value.meta.title)

const TableData = ref([])

const GetTableData = async () => {
  let { data } = await request.get(`/business?pageSize=${10}&current=${1}`)
  TableData.value = data.data
  console.log(data);
}

const formState = ref({
  fullName: '',
  admin: ''
})

const handleFinish = (values: any) => {
  console.log(values, formState);
};

const onSubmit = () => {
};


onMounted(() => {
  GetTableData()
})

</script>

<style lang="scss">
.qwe {
  height: 6rem;
  background: rgba($color: #fff, $alpha: 0.2);



  .ant-card-body {
    padding: 0;
    line-height: 6rem;
  }

  div {
    display: inline-block;
  }

  .tag {
    height: 2rem;
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 2rem;
    color: white;
    margin-left: 2rem;
  }

  .search {
    // height: 6rem;
    position: absolute;
    display: flex;
    right: 6rem;
    top: 2rem;

    .ant-btn {
      margin-right: 1rem;
    }
  }
}

.ant-card-bordered {
  margin: 1.3rem;
  border-radius: 15px;
}

.ant-table-thead>tr>th,
.ant-table-tbody>tr>td {
  text-align: center;
}
</style>