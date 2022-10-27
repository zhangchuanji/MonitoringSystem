<template>
  <div>

    <!-- 头部当前页面名称~ 搜索 -->
    <a-card class="qwe">
      <div class="tag">
        <HomeFilled /> {{ TabMenu }}
      </div>
      <div class="search">
        <a-button type="primary" @click="AddVisible = true">+新增</a-button>
        <a-input v-model:value="formSearchState.fullName" placeholder="请输入企业名称" />
      </div>
    </a-card>

    <!-- 表格区域 -->
    <a-card>
      <a-table :columns="columns" :data-source="TableData">
        <template #operation="{ record }" >
          <a-button type="link">库房</a-button>
          <a-button type="link" @click="Edit(record)">修改</a-button>
          <a-button type="link" danger>删除</a-button>
        </template>
      </a-table>
    </a-card>

    <!-- 新增数据弹出框 -->
    <a-modal class="addModal" width="50rem" v-model:visible="AddVisible" title="新增企业" @ok="handleAddOk" :destroyOnClose="true" :footer="null">
      <a-form layout="inline" :model="form.formAddState" @finish="handleAddFinish" @finishFailed="handleAddFinishFailed">
        <a-form-item label="Activity" >
          <a-input v-model:value="form.formAddState.fullName" placeholder="" />
        </a-form-item>
        <a-form-item label="Activity" >
          <a-input v-model:value="form.formAddState.abbreViation" placeholder="" />
        </a-form-item>
        <a-form-item label="Activity" >
          <a-textarea v-model:value="form.formAddState.adminRess" :rows="3" placeholder="" />
        </a-form-item>
        <a-form-item label="Activity" >
          <a-input v-model:value="form.formAddState.businessType" placeholder="" />
        </a-form-item>
        <a-form-item label="Activity" >
          <a-input v-model:value="form.formAddState.Phone" placeholder="" />
        </a-form-item>
        <a-form-item label="Activity zone" >
          <a-input v-model:value="form.formAddState.person" placeholder="" />
        </a-form-item>
        <a-form-item label="Activity" >
          <a-input v-model:value="form.formAddState.personPhone" placeholder="" />
        </a-form-item>
        <a-form-item label="Activity" >
          <a-input v-model:value="form.formAddState.admin" placeholder="" />
        </a-form-item>
        <a-form-item label="Activity" >
          <a-input v-model:value="form.formAddState.adminPhone" placeholder="" />
        </a-form-item>
        <a-form-item label="Activity" >
          <a-input v-model:value="form.formAddState.Remarks" placeholder="" />
        </a-form-item>
        <a-form-item label="Activity zone" >
          <a-input v-model:value="form.formAddState.website" placeholder="" />
        </a-form-item>
        <a-form-item>
          <a-button style="margin-left: 10px" @click="AddVisible = false">取消</a-button>
          <a-button type="primary" @click="onSubmit">新增</a-button>
        </a-form-item>
      </a-form>
    </a-modal>

    <!-- 修改数据弹出框 -->
    <a-modal class="addModal" width="50rem" v-model:visible="EditVisible" title="新增企业" @ok="handleEditOk" :destroyOnClose="true" :footer="null">
      <a-form layout="inline" :model="form.formEditState" @finish="handleEditFinish" @finishFailed="handleEditFinishFailed">
        <a-form-item label="Activity" >
          <a-input v-model:value="form.formEditState.fullName" placeholder="" />
        </a-form-item>
        <a-form-item label="Activity" >
          <a-input v-model:value="form.formEditState.abbreViation" placeholder="" />
        </a-form-item>
        <a-form-item label="Activity" >
          <a-textarea v-model:value="form.formEditState.adminRess" :rows="3" placeholder="" />
        </a-form-item>
        <a-form-item label="Activity" >
          <a-input v-model:value="form.formEditState.businessType" placeholder="" />
        </a-form-item>
        <a-form-item label="Activity" >
          <a-input v-model:value="form.formEditState.Phone" placeholder="" />
        </a-form-item>
        <a-form-item label="Activity zone" >
          <a-input v-model:value="form.formEditState.person" placeholder="" />
        </a-form-item>
        <a-form-item label="Activity" >
          <a-input v-model:value="form.formEditState.personPhone" placeholder="" />
        </a-form-item>
        <a-form-item label="Activity" >
          <a-input v-model:value="form.formEditState.admin" placeholder="" />
        </a-form-item>
        <a-form-item label="Activity" >
          <a-input v-model:value="form.formEditState.adminPhone" placeholder="" />
        </a-form-item>
        <a-form-item label="Activity" >
          <a-input v-model:value="form.formEditState.Remarks" placeholder="" />
        </a-form-item>
        <a-form-item label="Activity zone" >
          <a-input v-model:value="form.formEditState.website" placeholder="" />
        </a-form-item>
        <a-form-item>
          <a-button style="margin-left: 10px" @click="EditVisible = false">取消</a-button>
          <a-button type="primary" @click="onSubmit">新增</a-button>
        </a-form-item>
      </a-form>
    </a-modal>

  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, toRaw } from 'vue';
import { HomeFilled } from '@ant-design/icons-vue';
import { useRouter } from "vue-router";
import request from '../../request'
import { log } from 'console';

// 添加弹出的显示状态
const AddVisible = ref<boolean>(false);

// 修改弹出的显示状态
const EditVisible = ref<boolean>(false);

// 表格数据
const TableData = ref([])

// 表格字段
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

// 搜索表单字段
const formSearchState = reactive({
  fullName: '', // 企业全称
})

const form = reactive({
  // 添加表单
  formAddState: {
    fullName: '', // 企业全称
    abbreViation: '', // 企业昵称
    admin: "", // 负责负责人
    adminPhone: "", // 负责负责人电话
    adminRess: "", // 企业地址
    businessType: "", // 企业类型
    Phone: "", // 企业电话
    person: "", // 质管人员
    personPhone: "", // 质管人员电话
    Remarks: "", // 备注信息
    website: "", // 网址
  },
  // 修改表单
  formEditState: {
    fullName: '', // 企业全称
    abbreViation: '', // 企业昵称
    admin: "", // 负责负责人
    adminPhone: "", // 负责负责人电话
    adminRess: "", // 企业地址
    businessType: "", // 企业类型
    Phone: "", // 企业电话
    person: "", // 质管人员
    personPhone: "", // 质管人员电话
    Remarks: "", // 备注信息
    website: "", // 网址
  },
})

// 修改按钮回调
const Edit = (val: any) => {
  form.formEditState = val
  EditVisible.value = true
  console.log(form.formEditState);
  
}

// 弹出框内部确定回调
const handleAddOk = (e: MouseEvent) => {
  console.log(e);
  AddVisible.value = false;
};

// 弹出框内部确定回调
const handleEditOk = (e: MouseEvent) => {
  console.log(e);
  AddVisible.value = false;
};

// 获取当前路由地址名称
const router = useRouter();
const TabMenu = ref(router.currentRoute.value.meta.title)

// 获取表格接口数据
const GetTableData = async () => {
  let { data } = await request.get(`/business?pageSize=${10}&current=${1}`)
  TableData.value = data.data
  console.log(data);
}

// 表达内部确定按钮回调
const onSubmit = () => {
  console.log('submit!', toRaw(form.formAddState));
}

// 表达内部取消按钮回调
const onSubmitOut = () => {
  AddVisible.value = false;
}

// 添加表单验证成功后的回调
const handleAddFinish = (values: any) => {
  console.log(values, form.formAddState);
};

// 添加表单验证失败后的回调
const handleAddFinishFailed = (errors: any) => {
  console.log(errors);
};

// 修改表单验证成功后的回调
const handleEditFinish = (values: any) => {
  console.log(values, form.formEditState);
};

// 修改表单验证失败后的回调
const handleEditFinishFailed = (errors: any) => {
  console.log(errors);
};

// 自动获取数据
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

.addModal {
  width: 15rem;
}

.ant-modal-body {
  padding: 0;
}

.ant-form {
  margin: 2rem;
}

.ant-form-item-label > label {
  width: 92px;
  height: 32px;
  text-align: right;
}

.ant-form-inline .ant-form-item {
  width: 20rem;
  margin-left: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.ant-form-inline .ant-form-item:nth-child(3) {
  width: 42.5rem;
  margin-left: 1.5rem;
  margin-top: 1.8rem;
}

.ant-form-inline .ant-form-item:last-child {
  width: 42.5rem;
  margin-left: 1.5rem;
  margin-bottom: 2rem;

  .ant-btn:nth-child(1) {
    margin-left: 30.5rem !important;
  }

  .ant-btn {
    margin-left: 3rem !important;
  }
}

.ant-input:placeholder-shown {
  border-radius: 8px;
}
</style>