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
        <template #operation="{ record }">
          <a-button type="link" @click="router.push('/administration/meter')">仪表管理</a-button>
          <a-button type="link" @click="Edit(record)">修改</a-button>
          <a-popconfirm title="你确定要删除吗？" ok-text="Yes" cancel-text="No" @confirm="confirm(record._id)" @cancel="cancel">
            <a-button type="link" danger>删除</a-button>
          </a-popconfirm>
        </template>
      </a-table>
    </a-card>

    <!-- 新增数据弹出框 -->
    <a-modal class="addModal" width="50rem" v-model:visible="AddVisible" title="新增主机" :destroyOnClose="true"
      :footer="null">
      <a-form layout="inline" ref="addformRef" :rules="addrules" :model="form.formAddState">
        <a-form-item label="主机编号" name="number">
          <a-input v-model:value="form.formAddState.number" placeholder="请输入主机标号" />
        </a-form-item>
        <a-form-item label="主机名称" name="name">
          <a-input v-model:value="form.formAddState.name" placeholder="请输入主机名称" />
        </a-form-item>
        <a-form-item label="所属仓库" name="storage">
          <a-select ref="select" v-model:value="form.formAddState.storage" style="width: 100%"
            :options="form.options3.list" placeholder="请选择仓库"></a-select>
        </a-form-item>
        <a-form-item label="主机状态" name="state">
          <a-select ref="select" v-model:value="form.formAddState.state" style="width: 100%">
            <a-select-option value="0">在用</a-select-option>
            <a-select-option value="1">停用</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="设备型号" name="marking">
          <a-input v-model:value="form.formAddState.marking" placeholder="请输入设备型号" />
        </a-form-item>
        <a-form-item label="sim卡号" name="sim">
          <a-input v-model:value="form.formAddState.sim" placeholder="请输入sim卡号" />
        </a-form-item>
        <a-form-item>
          <a-button style="margin-left: 10px" @click="AddVisible = false;">取消</a-button>
          <a-button type="primary" @click="onSubmit">新增</a-button>
        </a-form-item>
      </a-form>
    </a-modal>

    <!-- 修改数据弹出框 -->
    <a-modal class="addModal" width="50rem" v-model:visible="EditVisible" title="新增企业" :destroyOnClose="true"
      :footer="null">
      <a-form layout="inline" :model="form.formEditState" ref="editformRef">
        <a-form-item label="主机编号">
          <a-input v-model:value="form.formEditState.number" placeholder="请输入主机编号" />
        </a-form-item>
        <a-form-item label="主机名称">
          <a-input v-model:value="form.formEditState.name" placeholder="请输入主机编号" />
        </a-form-item>
        <a-form-item label="所属仓库">
          <a-select ref="select" v-model:value="form.formEditState.storage" style="width: 30%"
            :options="form.options3.list" placeholder="请选择企业"></a-select>
        </a-form-item>
        <a-form-item label="主机状态">
          <a-input v-model:value="form.formEditState.state" placeholder="请输入库房面积" />
        </a-form-item>
        <a-form-item label="设备型号">
          <a-input v-model:value="form.formEditState.marking" placeholder="请输入库房负责人" />
        </a-form-item>
        <a-form-item label="sim卡号">
          <a-input v-model:value="form.formEditState.sim" placeholder="请输入负责人电话" />
        </a-form-item>
        <a-form-item>
          <a-button style="margin-left: 10px" @click="EditVisible = false">取消</a-button>
          <a-button type="primary" @click="handleEdit">修改</a-button>
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
import { message } from 'ant-design-vue';

const addformRef = ref();
// 获取当前路由地址名称
const router = useRouter();
const TabMenu = ref(router.currentRoute.value.meta.title)
const addrules = {//里面写效验规则
  number: {
    required: true,
    message: '请输入主机编号',
    trigger: 'blur'
  },
  name: {
    required: true,
    message: '请输入主机名称',
    trigger: 'blur'
  },
  storage: {
    required: true,
    message: '请选择所属仓库',
    trigger: 'blur'
  },
}
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
    key: "__v"
  },
  {
    title: '主机编号',
    dataIndex: 'number',
    key: "number",
  },
  {
    title: '主机名称',
    dataIndex: 'name',
    key: "name",
  },
  {
    title: '所属仓库',
    dataIndex: 'storage',
    key: "storage",
  },
  {
    title: '状态',
    dataIndex: 'state',
    key: "state",
  },
  {
    title: '设备型号',
    dataIndex: 'marking',
    key: "marking",
  },
  {
    title: 'sim卡号',
    dataIndex: 'sim',
    key: "sim",
  },
  {
    title: '操作',
    key: 'operation',
    slots: { customRender: 'operation' },
  },
];

// 搜索表单字段
const formSearchState = reactive({
  fullName: '', // 企业全称
})

const form = reactive({
  // 添加表单
  formAddState: {
    number: '',
    name: '',
    marking: '',
    sim: '',
    storage: '',
    state: '',
  },
  // 修改表单
  formEditState: {
    number: '',
    name: '',
    marking: '',
    sim: '',
    storage: '',
    state: '',
  },
  // 选择框数据
  options3: reactive(
    {
      list: [] as any[]
    }
  )
})

// 修改按钮回调
const Edit = (val: any) => {

  form.formEditState = val
  EditVisible.value = true
}


// 获取仓库接口数据
const GetTableData = async () => {
  let { data } = await request.get(`/host?pageSize=${10}&current=${1}`)
  TableData.value = data.data

}
// 获取企业接口数据
const GetStorageData = async () => {
  let { data } = await request.get(`/storage?pageSize=${10}&current=${1}`)
  for (const item of data.data) {
    let obj = {
      value: '',
      label: ''
    }
    obj.value = item._id
    obj.label = item.name
    form.options3.list.push(obj)
  }
}

// 表达内部确定按钮回调
const onSubmit = () => {
  addformRef.value.validate().then(async () => {
    let { data } = await request.post(`/host`, form.formAddState)
    if (data.code == 200) {
      GetTableData()
      addformRef.value.resetFields()
      AddVisible.value = false
      message.info('添加成功');
    }
  })
    .catch((err: any) => { console.log('err', err) })
}

const handleEdit = async () => {
  let { data } = await request.put(`/storage`, form.formEditState)
  if (data.code == 200) {
    GetTableData()
    message.success('修改成功')
  }
}

const confirm = async (id: any) => {
  let { data } = await request.delete('/storage?id=' + id)
  if (data.code == 200) {
    GetTableData()
    message.info('删除成功');
  }
};

const cancel = (e: any) => {
  console.log(e);
  message.info('取消删除');
};

// 自动获取数据
onMounted(() => {
  GetTableData()
  GetStorageData()
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

.ant-form-item-label>label {
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

.ant-form-inline .ant-form-item:nth-child(11) {
  width: 42.5rem;
  margin-left: 1.5rem;
  margin-bottom: 2rem;
}

.ant-form-inline .ant-form-item:last-child {
  width: 42.5rem;

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