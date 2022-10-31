<template>
  <div>

    <!-- 头部当前页面名称~ 搜索 -->
    <a-card class="qwe">
      <div class="tag">
        <HomeFilled /> {{ TabMenu }}
      </div>
      <div class="search">
        <a-input v-model:value="fullName" placeholder="请输入企业名称" />
      </div>
    </a-card>

    <!-- 表格区域 -->
    <a-card>
      <a-table :columns="columns" :data-source="TableData">
        <template #operation="{ record }" >
          <a-button type="link">温度曲线图</a-button>
          <a-button type="link">湿度曲线图</a-button>
        </template>
        <template #wd="{record}">
          <span style="color: red;" v-if="record.wd < record.wdyzMin || record.wd >= record.wdyzMax">{{ record.wd }}℃</span>
          <span style="color: green;" v-else>{{ record.wd }}℃</span>
          <!-- <span>{{record.wd < record.wdyzMin || record.wd >= record.wdyzMax}}</span> -->
        </template>
        <template #sd="{record}">
          <span style="color: red;" v-if="record.sd >= record.sdyzMax || record.sd <= record.sdyzMin">{{ record.sd }}℃</span>
          <span style="color: green;" v-else>{{ record.sd }}℃</span>
        </template>
        <template #wdjb="{text}">
          <span v-if="!text" style="color: red;">警报</span>
          <span v-else  style="color: green;">正常</span>
        </template>
        <template #sdjb="{text}">
          <span v-if="!text" style="color: red;">警报</span>
          <span v-else  style="color: green;">正常</span>
        </template>
        <template #wdyz="{record}">
          <span>{{ record.wdyzMin }} / {{ record.wdyzMax }}</span>
        </template>
        <template #sdyz="{record}">
          <span>{{ record.sdyzMin }} / {{ record.sdyzMax }}</span>
        </template>
        <template #sbzt="{text}">
          <span v-show=" text == 0 " style="color: red;">异常</span>
          <span v-show=" text == 1 " style="color: red;">停用</span>
          <span v-show=" text == 2 " style="color: green;">启用</span>
        </template>
      </a-table>
    </a-card>

  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, toRaw } from 'vue';
import { HomeFilled } from '@ant-design/icons-vue';
import { useRouter } from "vue-router";
import request from '../../request'

// 表格数据
const TableData = ref([
  {
    ybbh: "M101001002",
    ybmc: "M101001002",
    glzjh: "H201232012",
    ckmc: "昌平二号仓",
    qymc: "好万运输",
    cjrq: "20220114161801",
    wd: -8,
    wdyzMin: -5,
    wdyzMax: 40,
    wdjb: false,
    sd: 82,
    sdyzMin: 20,
    sdyzMax: 100,
    sdjb: true,
    sbzt: '0',
  },

])

const fullName = ref([])

// 表格字段
const columns = [
  {
    title: '序号',
    dataIndex: 'ybbh',
    key: "ybbh",
  },
  {
    title: '仪表名称',
    dataIndex: 'ybmc',
    key: "ybmc",
  },
  {
    title: '管理主机号',
    dataIndex: 'glzjh',
    key: "glzjh",
  },
  {
    title: '仓库名称',
    dataIndex: 'ckmc',
    key: "ckmc",
  },
  {
    title: '企业名称',
    dataIndex: 'qymc',
    key: "qymc",
  },
  {
    title: '采集日期',
    dataIndex: 'cjrq',
    key: "cjrq",
  },
  {
    title: '温度',
    dataIndex: 'wd',
    key: "wd",
    slots: { customRender: 'wd' },
  },
  {
    title: '温度阈值',
    dataIndex: 'wdyz',
    key: "wdyz",
    slots: { customRender: 'wdyz' },
  },
  {
    title: '温度级别',
    dataIndex: 'wdjb',
    key: "wdjb",
    slots: { customRender: 'wdjb' },
  },
  {
    title: '湿度',
    dataIndex: 'sd',
    key: "sd",
    slots: { customRender: 'sd' },
  },
  {
    title: '湿度阈值',
    dataIndex: 'sdyz',
    key: "sdyz",
    slots: { customRender: 'sdyz' },
  },
  {
    title: '湿度级别',
    dataIndex: 'sdjb',
    key: "sdjb",
    slots: { customRender: 'sdjb' },
  },
  {
    title: '设备状态',
    dataIndex: 'sbzt',
    key: "sbzt",
    slots: { customRender: 'sbzt' },
  },
  {
    title: '操作',
    key: 'operation',
    slots: { customRender: 'operation' },
  },
];

// 获取当前路由地址名称
const router = useRouter();
const TabMenu = ref(router.currentRoute.value.meta.title)

// 获取表格接口数据
const GetTableData = async () => {
  let { data } = await request.get(`/business?pageSize=${10}&current=${1}`)
  TableData.value = data.data
  console.log(data);
}
// 自动获取数据
onMounted(() => {
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