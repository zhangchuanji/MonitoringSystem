<template>
  <div>
    <a-card class="qwe">
      <div class="tag">
        <HomeFilled /> {{ TabMenu }}
      </div>
    </a-card>
    <a-card>
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
            <a-button type="link" @click="router.push({ path: '/monitoring/storehouse', params: { title: from.title } })">仓库实时监控</a-button>
          </bm-info-window>
        </baidu-map>
      </div>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, toRaw } from 'vue';
import { useRouter } from "vue-router";
import { HomeFilled } from '@ant-design/icons-vue';


// 获取当前路由地址名称
const router = useRouter();
const TabMenu = ref(router.currentRoute.value.meta.title)
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


</script>

<style lang="scss" scoped>
.qwe {
  height: 6rem;
  line-height: 3rem;
  background: rgba($color: #fff, $alpha: 0.2);

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
}



.ant-card-bordered {
  margin: 1.3rem;
  border-radius: 15px;
}


#map {
  width: 100%;
  height: 40rem;

  .BMap_cpyCtrl {
  display: none !important;

}

.anchorBL {
  display: none !important;
}


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
</style>