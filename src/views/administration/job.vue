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
          <a-button type="link" @click="Edit(record)">修改</a-button>
          <a-popconfirm title="你确定要删除吗？" ok-text="Yes" cancel-text="No"
            @confirm="confirm(record._id)" @cancel="cancel">
            <a-button type="link" danger>删除</a-button>
          </a-popconfirm>
        </template>
      </a-table>
    </a-card>

    <!-- 新增数据弹出框 -->
    <a-modal class="addModal" width="50rem" v-model:visible="AddVisible" title="新增仓库" :destroyOnClose="true"
      :footer="null">
      <a-form layout="inline" ref="addformRef" :rules="addrules" :model="form.formAddState">
        <a-form-item label="仓库编号" name="number">
          <a-input v-model:value="form.formAddState.number" placeholder="请输入仓库编号" />
        </a-form-item>
        <a-form-item label="企业名称" name="business">
          <a-select ref="select" v-model:value="form.formAddState.business" style="width: 100%"
            :options="form.options3.list" placeholder="请选择企业"></a-select>
        </a-form-item>
        <a-form-item label="库房名称" name="name">
          <a-input v-model:value="form.formAddState.name" placeholder="请输入库房名称" />
        </a-form-item>
        <a-form-item label="库房面积" name="area">
          <a-input v-model:value="form.formAddState.area" placeholder="请输入库房面积" />
        </a-form-item>
        <a-form-item label="库房负责人" name="person">
          <a-input v-model:value="form.formAddState.person" placeholder="请输入库房负责人" />
        </a-form-item>
        <a-form-item label="负责人电话" name="personPhone">
          <a-input v-model:value="form.formAddState.personPhone" placeholder="请输入负责人电话" />
        </a-form-item>
        <a-form-item label="库房类型" name="storageType">
          <a-select ref="select" v-model:value="form.formAddState.storageType" style="width: 100%"
            :options="form.options2" placeholder="请选择库房类型">
          </a-select>
        </a-form-item>
        <a-form-item label="状态" name="state">
          <a-select ref="select" v-model:value="form.formAddState.state" style="width: 100%" :options="form.options1"
            placeholder="请选择状态">
          </a-select>
        </a-form-item>
        <a-form-item label="经度" name="longitude">
          <a-input v-model:value="form.formAddState.longitude" placeholder="请输入经度" />
        </a-form-item>
        <a-form-item label="维度" name="dimension">
          <a-input v-model:value="form.formAddState.dimension" placeholder="请输入维度" />
        </a-form-item>
        <a-form-item label="详细地址" name="address">
          <a-textarea v-model:value="form.formAddState.address" placeholder="请输入详细地址" />
        </a-form-item>
        <a-form-item>
          <a-button style="margin-left: 10px" @click="AddVisible = false">取消</a-button>
          <a-button type="primary" @click="onSubmit">新增</a-button>
        </a-form-item>
      </a-form>
    </a-modal>

    <!-- 修改数据弹出框 -->
    <a-modal class="addModal" width="50rem" v-model:visible="EditVisible" title="新增企业" :destroyOnClose="true"
      :footer="null">
      <a-form layout="inline" :model="form.formEditState" ref="editformRef">
        <a-form-item label="仓库编号">
          <a-input v-model:value="form.formEditState.number" placeholder="请输入仓库编号" />
        </a-form-item>
        <a-form-item label="企业名称">
          <a-select ref="select" v-model:value="form.formEditState.business" style="width: 100%"
            :options="form.options1" placeholder="请选择企业"></a-select>
        </a-form-item>
        <a-form-item label="库房名称">
          <a-input v-model:value="form.formEditState.name" placeholder="请输入库房名称" />
        </a-form-item>
        <a-form-item label="库房面积">
          <a-input v-model:value="form.formEditState.area" placeholder="请输入库房面积" />
        </a-form-item>
        <a-form-item label="库房负责人">
          <a-input v-model:value="form.formEditState.person" placeholder="请输入库房负责人" />
        </a-form-item>
        <a-form-item label="负责人电话">
          <a-input v-model:value="form.formEditState.personPhone" placeholder="请输入负责人电话" />
        </a-form-item>
        <a-form-item label="库房类型">
          <a-input v-model:value="form.formEditState.storageType" placeholder="请选择库房类型" />
        </a-form-item>
        <a-form-item label="状态">
          <a-select ref="select" v-model:value="form.formEditState.state" style="width: 100%" :options="form.options1"
            placeholder="请选择状态">
          </a-select>
        </a-form-item>
        <a-form-item label="经度">
          <a-input v-model:value="form.formAddState.longitude" placeholder="请输入经度" />
        </a-form-item>
        <a-form-item label="维度">
          <a-input v-model:value="form.formAddState.dimension" placeholder="请输入维度" />
        </a-form-item>
        <a-form-item label="详细地址">
          <a-textarea v-model:value="form.formAddState.address" placeholder="请输入详细地址" />
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

const addrules = {//里面写效验规则
  number: {
    required: true,
    message: '请输入库房编号',
    trigger: 'blur'
  },
  business: {
    required: true,
    message: '请选择所属企业',
    trigger: 'blur'
  },
  name: {
    required: true,
    message: '请输入库房名称',
    trigger: 'blur'
  },
  storageType: {
    required: true,
    message: '请选择库房类型',
    trigger: 'blur'
  },
  state: {
    required: true,
    message: '请选择库房状态',
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
    title: '库房类型',
    dataIndex: 'storageType',
    key: "storageType",
  },
  {
    title: '库房编号',
    dataIndex: 'number',
    key: "number",
  },
  {
    title: '库房名称',
    dataIndex: 'name',
    key: "name",
  },
  {
    title: '所属公司',
    dataIndex: 'business',
    key: "business",
  },
  {
    title: '负责人',
    dataIndex: 'person',
    key: "person",
  },
  {
    title: '联系电话',
    dataIndex: 'personPhone',
    key: "personPhone",
  },
  {
    title: '库房地址',
    dataIndex: 'address',
    key: "address",
  },
  {
    title: '面积',
    dataIndex: 'area',
    key: "area",
  },
  {
    title: '状态',
    dataIndex: 'state',
    key: "state",
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
    business: "",
    name: '',
    area: '',
    person: '',
    personPhone: '',
    storageType: '',
    state: '',
    longitude: '',
    dimension: '',
    address: '',
  },
  // 修改表单
  formEditState: {
    number: '',
    business: "",
    name: '',
    area: '',
    person: '',
    personPhone: '',
    storageType: '',
    state: '',
    longitude: '',
    dimension: '',
    address: '',
  },
  // 选择框数据
  options1: reactive([
    {
      value: '0',
      label: '空仓',
    },
    {
      value: '1',
      label: '正常',
    },
  ]),
  options2: reactive([
    {
      value: '0',
      label: '冷库',
    },
    {
      value: '1',
      label: '恒温库',
    },
  ]),
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
  console.log(form.formEditState);
}

// 获取当前路由地址名称
const router = useRouter();
const TabMenu = ref(router.currentRoute.value.meta.title)

// 获取仓库接口数据
const GetTableData = async () => {
  let { data } = await request.get(`/storage?pageSize=${10}&current=${1}`)
  TableData.value = data.data

}
// 获取企业接口数据
const GetBusniessData = async () => {
  let { data } = await request.get(`/business?pageSize=${10}&current=${1}`)
  let obj = {
    value: '',
    label: ''
  }
  for (const item of data.data) {
    obj.value = item._id
    obj.label = item.fullName
    form.options3.list.push(obj)
  }
}

// 表达内部确定按钮回调
const onSubmit = () => {
  addformRef.value.validate().then(async () => {
    let { data } = await request.post(`/storage`, form.formAddState)
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
  GetBusniessData()
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