<template>
  <div>
    <div>
      <div class="top">
        <a-card>
          <div class="top-left">
            <div class="top-img">
              <a-avatar :size="64" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </div>
            <div class="topText">
              <p class="topP">欢迎, admin,祝您每一天开心</p>
              <p class="topLoginTime">上一次登录时间：{{ times }}</p>
            </div>
          </div>
          <div class="top-right">
            <div>
              <p>16</p>
              <p>设备数</p>
            </div>
            <div>
              <p>5</p>
              <p>机构数</p>
            </div>
            <div>
              <p>32342</p>
              <p>警告数</p>
            </div>
          </div>
        </a-card>
      </div>
      <div class="mapContent">
        <a-card>
          <div class="tagMap">
            <p>实时监控图</p>
            <div class="mapRigth">
              <div>
                <p>16</p>
                <p>总仪表数</p>
              </div>
              <div>
                <p>57%</p>
                <p>正常率</p>
              </div>
              <div>
                <p>32123</p>
                <p>待处理</p>
              </div>
              <div>
                <p>2312</p>
                <p>已处理</p>
              </div>
            </div>
          </div>
          <div id="map">
            <baidu-map class="map" center="保定" :zoom="7" :scroll-wheel-zoom="true">
              <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
              <template v-for="(items, index) in points" :key="index">
                <bm-marker :position="items.markerPoint" @click="MapClick(items)">
                </bm-marker>
              </template>
              <bm-info-window :position="position" :show="show" @close="infoWindowClose" @open="infoWindowOpen">
                <div>
                  <span>仓库名称：</span> <span class="item">{{ from.title }}</span>
                  <span>企业全称：</span> <span class="item">{{ from.fullName }}</span>
                </div>
                <div>
                  <span>质管人员：</span> <span class="item">{{ from.admin }}</span>
                  <span>质管人员电话：</span> <span class="item">{{ from.adminPhone }}</span>
                </div>
                <a-button type="link">仓库实时监控</a-button>
              </bm-info-window>
            </baidu-map>
          </div>
        </a-card>
      </div>
      <div class="EChartsContent">
        <a-card>
          <div class="tagECharts">
            <p>设备数趋势图</p>
          </div>
          <div ref="echartsRefLine" id="echartsLine"></div>
        </a-card>
      </div>
      <div class="bottomComtent">
        <a-card>
          <div class="bottomComtent1">
            <p>设备状态分布</p>
          </div>
          <div ref="echartsRefPie" id="echartsPie"></div>
        </a-card>
        <a-card>
          <div class="bottomComtent2">
            <p>操作记录</p>
          </div>
          <ul>
            <li class="list">
              <div class="list_img">
                <div>
                  <a-avatar :size="50"
                    src="https://img2.baidu.com/it/u=3094149767,177600321&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1667062800&t=f95b8ff1307c1af4f41d29852beb3d5f" />
                </div>
              </div>
              <div class="list_text">
                <p>admin: 1324qrkhaskfjaf</p>
                <p>2022-10-28/13:36</p>
              </div>
            </li>
            <li class="list">
              <div class="list_img">
                <div>
                  <a-avatar :size="50"
                    src="https://img2.baidu.com/it/u=3094149767,177600321&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1667062800&t=f95b8ff1307c1af4f41d29852beb3d5f" />
                </div>
              </div>
              <div class="list_text">
                <p>admin: 1324qrkhaskfjaf</p>
                <p>2022-10-28/13:36</p>
              </div>
            </li>
            <li class="list">
              <div class="list_img">
                <div>
                  <a-avatar :size="50"
                    src="https://img2.baidu.com/it/u=3094149767,177600321&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1667062800&t=f95b8ff1307c1af4f41d29852beb3d5f" />
                </div>
              </div>
              <div class="list_text">
                <p>admin: 1324qrkhaskfjaf</p>
                <p>2022-10-28 13:36</p>
              </div>
            </li>
            <li class="list">
              <div class="list_img">
                <div>
                  <a-avatar :size="50"
                    src="https://img2.baidu.com/it/u=3094149767,177600321&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1667062800&t=f95b8ff1307c1af4f41d29852beb3d5f" />
                </div>
              </div>
              <div class="list_text">
                <p>admin: 1324qrkhaskfjaf</p>
                <p>2022-10-28/13:36</p>
              </div>
            </li>
          </ul>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const echartsRefLine = ref<HTMLElement>()

const echartsRefPie = ref<HTMLElement>()

const show = ref(false);

const position = ref({});

const from = ref({
  title: "",
  fullName: "",
  admin: "",
  adminPhone: "",
});

const points = ref([
  {  // 张家口仓
    markerPoint: { lng: 114.97600, lat: 40.78299 },
    title: "张家口仓",
    fullName: "顺路物流",
    admin: "amdin",
    adminPhone: "12345678911"
  },

  { // 大同仓
    markerPoint: { lng: 114.16372, lat: 39.98562 },
    title: "大同仓",
    fullName: "顺路物流",
    admin: "amdin",
    adminPhone: "12345678911"
  },

  { // 山西朔州仓
    markerPoint: { lng: 112.49562, lat: 39.35692 },
    title: "山西朔州仓",
    fullName: "迅达仓储",
    admin: "amdin",
    adminPhone: "12345678911"
  },

  { // 天津北辰仓
    markerPoint: { lng: 117.16507, lat: 39.22047 },
    title: "天津北辰仓",
    fullName: "迅达仓储",
    admin: "amdin",
    adminPhone: "12345678911"
  },

  { // 保定仓
    markerPoint: { lng: 115.42911, lat: 38.86341 },
    title: "保定仓",
    fullName: "迅达仓储",
    admin: "amdin",
    adminPhone: "12345678911"
  },

  { // 昌平二号仓
    markerPoint: { lng: 115.16795, lat: 38.91505 },
    title: "昌平二号仓",
    fullName: "好万运输",
    admin: "amdin",
    adminPhone: "12345678911"
  },

  { // 石家庄仓
    markerPoint: { lng: 114.29720, lat: 38.12899 },
    title: "石家庄仓",
    fullName: "好万运输",
    admin: "amdin",
    adminPhone: "12345678911"
  },

  { // 太原仓
    markerPoint: { lng: 112.50675, lat: 37.86324 },
    title: "太原仓",
    fullName: "好万运输",
    admin: "amdin",
    adminPhone: "12345678911"
  },
]);

const EchartsItemLine = () => {
  const myEcharts = echarts.init(echartsRefLine.value!)
  //要操作的配置
  const option = {
    grid: {
      top: "4%",
      left: "2%",
      right: "4%",
      bottom: "10%"
    },
    xAxis: {
      boundaryGap: false,
      type: 'category',
      data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '12:00',
        '14:00', '16:00', '18:00', '20:00', '22:00'],
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid'
        }
      }
    },
    series: [
      {
        data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150, 150],
        symbol: 'circle',
        showSymbol: false,
        type: 'line',
        smooth: true,
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: 'rgba(0, 158, 251,0.2)'
            }, {
              offset: 1, color: 'rgba(255, 255, 255,0.1)'
            }],
            global: false
          }
        },
        lineStyle: { normal: { color: 'rgb(0, 158, 251)' } },
      }
    ],
  }
  //设置配置
  myEcharts.setOption(option)
}

const EchartsItemPie = () => {
  const myEchartse = echarts.init(echartsRefPie.value!)
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 235, name: '正常运行' },
          { value: 10, name: '离线' },
          { value: 34, name: '报警' },
          { value: 35, name: '预报警' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  //设置配置
  myEchartse.setOption(option)
}

const infoWindowClose = () => {
  show.value = false;
}
const infoWindowOpen = () => {
  show.value = true;
}
const MapClick = (items: any) => {
  console.log(items);
  from.value = items;
  position.value = items.markerPoint;
  show.value = true;
};

const state = reactive({

  date: '',

  time: '',

  week: '',

  showIndex: 0

})

// 获取时间接口
const times = ref('')

const getTime = async () => {

  var myDate = new Date()

  let month = (myDate.getMonth() + 1).toString().padStart(2, '0')

  let day = myDate.getDate().toString().padStart(2, '0')

  let hour = myDate.getHours().toString().padStart(2, '0')

  let minutes = myDate.getMinutes().toString().padStart(2, '0')

  let seconed = myDate.getSeconds().toString().padStart(2, '0')

  state.date = myDate.getFullYear() + '-' + month + '-' + day

  state.time = hour + ':' + minutes + ':' + seconed

  times.value = state.date + "    " + state.time
}

setInterval(() => {

  getTime()

}, 1000)

const getWeekDate = () => {

  var now = new Date()

  var day = now.getDay()

  var weeks = [

    '星期日',

    '星期一',

    '星期二',

    '星期三',

    '星期四',

    '星期五',

    '星期六'

  ]
  state.week = weeks[day]
}

setInterval(() => {
  getWeekDate()
}, 1000 * 60 * 60 * 24)


onMounted(() => {
  getTime()
  EchartsItemLine()
  EchartsItemPie()
})
</script>

<style lang="scss">
.top {
  width: 100%;
  height: 100px;

  .ant-card-bordered:nth-child(1) {
    border-radius: 15px;
    height: 100%;
    padding: 16px;

    .ant-card-body {
      height: 100%;
      padding: 0;
    }
  }

  .top-left {
    width: 50%;
    height: 100%;
    display: inline-block;

    div {
      display: inline-block;
    }

    .top-img {
      position: absolute;
      top: 1rem;

      img {
        vertical-align: middle;
      }
    }

    .topText {
      margin-left: 4.2rem;

      p {
        margin: 0;
      }

      .topP {
        font-size: 1.1rem;
        margin-top: 0.4rem;
      }

      .topLoginTime {
        margin-top: 0.5rem;
        color: #999999;
      }
    }
  }

  .top-right {
    position: absolute;
    top: 1.4rem;
    right: 2rem;
    display: inline-block;

    div {
      width: 6.5rem;
      // margin-left: 4rem;
      text-align: center;
      display: inline-block;
      border-right: 1px solid #e7e7e7;

      p {
        margin: 0;
      }

      p:nth-child(1) {
        font-size: 1.2rem;
        color: #818bf4;
      }

      p:nth-child(2) {
        font-size: 0.5rem;
        margin-top: 2px;
        color: #999999;
      }
    }

    div:last-child {
      border: none;
    }
  }
}

.mapContent {
  margin-top: 1rem;

  .ant-card-bordered {
    border-radius: 15px;
    height: 100%;
    padding: 16px;


    .ant-card-body {
      height: 100%;
      padding: 0;
      border-radius: 15px;
    }
  }

  .tagMap {
    width: 100%;
    height: 4.5rem;

    p {
      height: 1.5rem;
      display: inline-block;
      border-bottom: 2px solid salmon;
    }

    .mapRigth {
      height: 100%;
      position: absolute;
      top: 2rem;
      right: 2.6rem;

      div {
        display: inline-block;
        text-align: center;
        width: 4.3rem;

        p {
          border: none;
          display: block;
          margin: 0;
        }

        p:nth-child(1) {
          font-size: 1rem;
          // color: #818bf4;
        }

        p:nth-child(2) {
          font-size: 0.5rem;
          margin-top: 2px;
          color: #999999;
        }
      }
    }
  }

  #map {
    width: 100%;
    height: 22rem;

    .map {
      width: 100%;
      height: 100%;

      div {
        // margin-top: 10px;

        span {
          display: inline-block;
          width: 150px;
          height: 30px;
          margin-left: 5px;
          text-align: right;
          margin-top: 10px;
          font-weight: 900;
          font-size: 0.9rem;
        }

        .item {
          color: royalblue;
          font-size: 0.2rem;
          text-align: left;
        }
      }
    }
  }

  .BMap_cpyCtrl {
    display: none !important;

  }

  .anchorBL {
    display: none !important;
  }
}

.EChartsContent {
  margin-top: 1rem;

  .ant-card-bordered {
    border-radius: 15px;
    height: 100%;
    padding: 16px;


    .ant-card-body {
      height: 100%;
      padding: 0;
      border-radius: 15px;
    }
  }

  .tagECharts {
    width: 100%;
    height: 2.5rem;

    p {
      height: 1.5rem;
      display: inline-block;
      border-bottom: 2px solid salmon;
    }
  }

  #echartsLine {
    width: 1660px;
    height: 16rem;
  }

}

.bottomComtent {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;

  .ant-card-bordered {
    border-radius: 15px;
    width: 49%;
    height: 25rem;
    padding: 16px;
    display: inline-block;

    .ant-card-body {
      height: 100%;
      padding: 0;
      border-radius: 15px;
    }
  }

  .ant-card-bordered:nth-child(2) {
    margin-left: 2%;
  }

  #echartsPie {
    width: 100%;
    height: 20rem;
  }

  .bottomComtent1 {


    p {
      height: 1.5rem;
      display: inline-block;
      border-bottom: 2px solid salmon;
    }
  }

  .bottomComtent2 {

    p {
      height: 1.5rem;
      display: inline-block;
      border-bottom: 2px solid salmon;
    }
  }

  .list {
    list-style: none;
    display: flex;
    // margin-top: 12px;
    padding: 16px;
    border-bottom: 1px solid #e7e7e7;

    p {
      margin: 0px;
      margin-top: 2px;
      font-size: 15px;
      margin-left: 10px;
    }

    p:nth-child(2) {
      color: #999999;
      font-size: 12px;
    }
  }

  .list:last-child {
    border: none;
  }

}
</style>