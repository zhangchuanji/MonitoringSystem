<template>
  <div>

    <!-- 头部当前页面名称~ 搜索 -->
    <a-card class="qwe">
      <div class="tag">
        <HomeFilled /> {{ TabMenu }}
      </div>
      <div class="search">
        <a-button type="primary" @click="AddVisible = true">+新增</a-button>
        <a-input v-model:value="serachValue" placeholder="请输入企业名称" @change="handleChange" />
      </div>
    </a-card>

    <!-- 表格区域 -->
    <a-card>
      <a-table :columns="columns" :data-source="TableData" :pagination="pagination" @change="tablePaginationChange">
        <template #operation="{ record }">
          <a-button type="link" @click="router.push('/administration/warehouse')">库房</a-button>
          <a-button type="link" @click="Edit(record)">修改</a-button>
          <a-popconfirm title="你确定要删除吗？" ok-text="Yes" cancel-text="No" @confirm="confirm(record._id)" @cancel="cancel">
            <a-button type="link" danger>删除</a-button>
          </a-popconfirm>
        </template>
      </a-table>
    </a-card>

    <!-- 新增数据弹出框 -->
    <a-modal class="addModal" width="50rem" v-model:visible="AddVisible" title="新增企业" :destroyOnClose="true"
      :footer="null">
      <a-form layout="inline" ref="addformRef" :rules="addrules" :model="form.formAddState">
        <a-form-item label="企业名称" name="fullName">
          <a-input v-model:value="form.formAddState.fullName" placeholder="请输入" />
        </a-form-item>
        <a-form-item label="企业简称" name="abbreViation">
          <a-input v-model:value="form.formAddState.abbreViation" placeholder="请输入" />
        </a-form-item>
        <a-form-item label="地址" name="address">
          <a-textarea v-model:value="form.formAddState.address" :rows="3" placeholder="请输入" />
        </a-form-item>
        <a-form-item label="企业类型" name="businessType">
          <a-input v-model:value="form.formAddState.businessType" placeholder="请输入" />
        </a-form-item>
        <a-form-item label="公司电话" name="Phone">
          <a-input v-model:value="form.formAddState.phone" placeholder="请输入" />
        </a-form-item>
        <a-form-item label="质管人员" name="person">
          <a-input v-model:value="form.formAddState.person" placeholder="请输入" />
        </a-form-item>
        <a-form-item label="质管人电话" name="personPhone">
          <a-input v-model:value="form.formAddState.personPhone" placeholder="请输入" />
        </a-form-item>
        <a-form-item label="公司负责人" name="admin">
          <a-input v-model:value="form.formAddState.admin" placeholder="请输入" />
        </a-form-item>
        <a-form-item label="负责人电话" name="adminPhone">
          <a-input v-model:value="form.formAddState.adminPhone" placeholder="请输入" />
        </a-form-item>
        <a-form-item label="备注信息" name="Remarks">
          <a-input v-model:value="form.formAddState.Remarks" placeholder="请输入" />
        </a-form-item>
        <a-form-item label="网址" name="website">
          <a-input v-model:value="form.formAddState.website" placeholder="请输入" />
        </a-form-item>
        <a-form-item>
          <a-button style="margin-left: 10px" @click="AddVisible = false">取消</a-button>
          <a-button type="primary" @click="onSubmit">新增</a-button>
        </a-form-item>
      </a-form>
    </a-modal>

    <!-- 修改对话框 -->
    <a-modal class="addModal" width="50rem" v-model:visible="EditVisible" title="修改企业" :destroyOnClose="true"
      :footer="null">
      <a-form layout="inline" :model="form.formEditState">
        <a-form-item label="企业名称">
          <a-input v-model:value="form.formEditState.fullName" placeholder="" />
        </a-form-item>
        <a-form-item label="企业简称">
          <a-input v-model:value="form.formEditState.abbreViation" placeholder="" />
        </a-form-item>
        <a-form-item label="地址">
          <a-textarea v-model:value="form.formEditState.address" :rows="3" placeholder="" />
        </a-form-item>
        <a-form-item label="企业类型">
          <a-input v-model:value="form.formEditState.businessType" placeholder="" />
        </a-form-item>
        <a-form-item label="公司电话">
          <a-input v-model:value="form.formEditState.phone" placeholder="" />
        </a-form-item>
        <a-form-item label="质管人员">
          <a-input v-model:value="form.formEditState.person" placeholder="" />
        </a-form-item>
        <a-form-item label="质管人电话">
          <a-input v-model:value="form.formEditState.personPhone" placeholder="" />
        </a-form-item>
        <a-form-item label="公司负责人">
          <a-input v-model:value="form.formEditState.admin" placeholder="" />
        </a-form-item>
        <a-form-item label="负责人电话">
          <a-input v-model:value="form.formEditState.adminPhone" placeholder="" />
        </a-form-item>
        <a-form-item label="备注信息">
          <a-input v-model:value="form.formEditState.Remarks" placeholder="" />
        </a-form-item>
        <a-form-item label="网址">
          <a-input v-model:value="form.formEditState.website" placeholder="" />
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
import { onMounted, reactive, ref, watch } from 'vue';
import { HomeFilled } from '@ant-design/icons-vue';
import { useRouter } from "vue-router";
import request from '../../request'
import { message } from 'ant-design-vue';


const addformRef = ref();

const addrules = {//里面写效验规则
  fullName: {
    required: true,
    message: '请输入',
    trigger: 'blur'
  },
  abbreViation: {
    required: true,
    message: '请输入',
    trigger: 'blur'
  }
}

// 添加弹出的显示状态
const AddVisible = ref<boolean>(false);

// 修改弹出的显示状态
const EditVisible = ref<boolean>(false);

// 表格数据
const TableData = ref([])

const pagination = reactive({
  current: 1,
  // defaultCurrent: 1,
  total: 0, // 总数
  showSizeChanger: true,
  pageSizeOptions: ['1', '10', '20', '40', '80', '100'],
  // hideOnSinglePage: true, // 只有一页时是否隐藏分页器
  pageSize: 10 // 每页条数，所有页设置统一的条数
})

const tablePaginationChange = (pagination: any) => {
  pagination.current = pagination.current  // 重新设置当前页
  pagination.pageSize = pagination.pageSize
}



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
    dataIndex: 'person',
    key: "person",
    width: '19%',
  },
  {
    title: '联系电话',
    dataIndex: 'personPhone',
    key: "personPhone",
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
const serachValue = ref('')

const form = reactive({
  // 添加表单
  formAddState: {
    fullName: '', // 企业全称
    abbreViation: '', // 企业昵称
    admin: "", // 负责负责人
    adminPhone: "", // 负责负责人电话
    address: "", // 企业地址
    businessType: "", // 企业类型
    phone: "", // 企业电话
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
    address: "", // 企业地址
    businessType: "", // 企业类型
    phone: "", // 企业电话
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
}

// 确认进行修改
const handleEdit = async () => {
  let { data } = await request.put('/business', form.formEditState)
  if (data.code == 200) {
    message.success('修改成功')
    EditVisible.value = false
    GetTableData()
  }
}

// 获取当前路由地址名称
const router = useRouter();
const TabMenu = ref(router.currentRoute.value.meta.title)

// 获取表格接口数据
const GetTableData = async () => {
  let { data } = await request.get(`/business?pageSize=${pagination.pageSize}&current=${pagination.current}`)
  TableData.value = data.data
  pagination.total = data.total
}

// 表达内部确定按钮回调
const onSubmit = () => {
  addformRef.value.validate().then(async () => {
    ;
    let { data } = await request.post(`/business`, form.formAddState)
    if (data.code == 200) {
      GetTableData()
      addformRef.value.resetFields()
      AddVisible.value = false
      message.info('添加成功');
    }
  })
    .catch((err: any) => { console.log('err', err) })
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


// 搜索框
const handleChange = async () => {
  let { data } = await request.get(`/business?fullName=${serachValue.value}`)
  TableData.value = data.data
}

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