<template>
  <div>
    <a-card class="qwe">
      <div class="tag">
        <HomeFilled /> {{ TabMenu }}
      </div>
    </a-card>
    <a-card class="xxx">
      <a-card class="measure" style="width: 300px; display: inline-block; margin: 8px;" v-for="(val, index) in ListData"
        :key="index">
        <div style="margin-bottom: 1rem;">
          <p>{{ val.title }}</p>
          <EditTwoTone twoToneColor="#186bd0" style="position: absolute; right: 24px; top: 30px; cursor: pointer;"/>
        </div>
        <div>
          <svg t="1667198349587" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="2655" width="200" height="200">
            <path
              d="M703.928027 449.239535 703.928027 191.928027c0-106.008247-85.91978-191.928027-191.928027-191.928027s-191.928027 85.91978-191.928027 191.928027l0 257.311508c-77.283019 58.410096-127.952018 150.151693-127.952018 254.496564 0 176.701737 143.178308 319.880045 319.880045 319.880045s319.880045-143.178308 319.880045-319.880045C831.880045 599.391228 781.211046 507.649631 703.928027 449.239535zM512 959.640135c-141.323004 0-255.904036-114.581032-255.904036-255.904036 0-64.487817 24.630763-122.642009 63.976009-167.617144C329.09259 524.98713 341.823816 510.592528 365.047107 504.194927 383.024366 495.17431 384.047982 482.18718 384.047982 464.209921 384.047982 457.49244 384.047982 424.992628 384.047982 384.23991l95.964013 0C497.669374 384.23991 512 369.909284 512 352.251906S497.669374 320.263901 480.011996 320.263901L384.047982 320.263901c0-22.135699 0-44.07947 0-63.976009l95.964013 0C497.669374 256.287892 512 241.957266 512 224.299888S497.669374 192.311883 480.011996 192.311883L384.047982 192.311883c0-0.127952 0-0.255904 0-0.383856 0-70.629514 57.322504-127.952018 127.952018-127.952018s127.952018 57.322504 127.952018 127.952018l0 271.898038c0 31.41222 26.997876 38.193677 63.976009 72.29289 39.345246 44.975134 63.976009 103.129327 63.976009 167.617144C767.904036 845.059103 653.323004 959.640135 512 959.640135z"
              p-id="2656" fill="#27c7d8"></path>
            <path
              d="M671.940022 671.748094c-17.657378 0-31.988004 14.330626-31.988004 31.988004 0 70.629514-57.322504 127.952018-127.952018 127.952018-17.657378 0-31.988004 14.330626-31.988004 31.988004s14.330626 31.988004 31.988004 31.988004c106.008247 0 191.928027-85.91978 191.928027-191.928027C703.928027 686.014744 689.597401 671.748094 671.940022 671.748094z"
              p-id="2657" fill="#27c7d8"></path>
          </svg>
          <span>{{ val.temperature }}</span><span style="position: absolute; right: 24px;">{{ val.temperatureMin }} / {{
              val.temperatureMax
          }}</span>
        </div>
        <div>
          <svg t="1667199352165" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="3855" width="200" height="200">
            <path
              d="M505.856 918.016c-177.664 0-322.56-144.896-322.56-322.56 0-220.16 225.28-423.936 293.888-480.768 16.384-13.824 40.448-13.824 56.832 0 69.12 57.344 293.888 260.608 293.888 480.768 0.512 178.176-143.872 322.56-322.048 322.56z m0-755.712c-57.344 48.64-267.776 240.128-267.776 433.664 0 147.968 120.32 267.776 267.776 267.776s267.776-120.32 267.776-267.776c0.512-194.048-210.432-385.536-267.776-433.664z"
              fill="#27c7d8" p-id="3856"></path>
            <path
              d="M453.632 800.768c-2.56 0-5.632-0.512-8.192-1.024-79.872-25.6-139.776-92.16-156.672-174.08-3.072-14.848 6.656-29.184 20.992-32.256 14.848-3.072 29.184 6.656 32.256 20.992 12.8 62.464 58.88 113.664 119.808 132.608 14.336 4.608 22.528 19.968 17.92 34.304-4.096 11.776-14.848 19.456-26.112 19.456z"
              fill="#27c7d8" p-id="3857"></path>
          </svg>
          <span>{{ val.humidity }}</span>
          <span style="position: absolute; right: 24px;">{{ val.humidityMin }} / {{ val.humidityMax }}</span>
        </div>
      </a-card>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, toRaw } from 'vue';
import { useRouter } from "vue-router";
import { HomeFilled, EditTwoTone } from '@ant-design/icons-vue';


const ListData = ref([
  {
    title: "昌平二号仓",
    temperature: "-18℃",
    humidity: "82%",
    temperatureMin: "-5",
    temperatureMax: "40",
    humidityMin: "20",
    humidityMax: "100",
  },
  {
    title: "保定仓",
    temperature: "-50℃",
    humidity: "31%",
    temperatureMin: "-20",
    temperatureMax: "80",
    humidityMin: "10",
    humidityMax: "75",
  },
  {
    title: "保定仓",
    temperature: "-26℃",
    humidity: "32%",
    temperatureMin: "-10",
    temperatureMax: "46",
    humidityMin: "36",
    humidityMax: "75",
  },
  {
    title: "大同仓",
    temperature: "-35℃",
    humidity: "48%",
    temperatureMin: "0",
    temperatureMax: "90",
    humidityMin: "20",
    humidityMax: "90",
  },
  {
    title: "大同仓",
    temperature: "-34℃",
    humidity: "39%",
    temperatureMin: "-5",
    temperatureMax: "100",
    humidityMin: "10",
    humidityMax: "90",
  },
  {
    title: "大同仓",
    temperature: "-79℃",
    humidity: "85%",
    temperatureMin: "-5",
    temperatureMax: "95",
    humidityMin: "10",
    humidityMax: "90",
  },
  {
    title: "大同仓",
    temperature: "-30℃",
    humidity: "35%",
    temperatureMin: "-10",
    temperatureMax: "95",
    humidityMin: "20",
    humidityMax: "90",
  },
  {
    title: "保定仓",
    temperature: "-49℃",
    humidity: "52%",
    temperatureMin: "10",
    temperatureMax: "20",
    humidityMin: "25",
    humidityMax: "45",
  },
  {
    title: "保定仓",
    temperature: "-24℃",
    humidity: "85%",
    temperatureMin: "15",
    temperatureMax: "95",
    humidityMin: "5",
    humidityMax: "80",
  },
  {
    title: "保定仓",
    temperature: "-13℃",
    humidity: "81%",
    temperatureMin: "-30",
    temperatureMax: "90",
    humidityMin: "5",
    humidityMax: "90",
  },
  {
    title: "张家口仓",
    temperature: "-64℃",
    humidity: "27%",
    temperatureMin: "-10",
    temperatureMax: "89",
    humidityMin: "10",
    humidityMax: "90",
  },
  {
    title: "石家庄仓",
    temperature: "-44℃",
    humidity: "86%",
    temperatureMin: "-10",
    temperatureMax: "89",
    humidityMin: "5",
    humidityMax: "90",
  },
])

// 获取当前路由地址名称
const router = useRouter();
const TabMenu = ref(router.currentRoute.value.meta.title)


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

.xxx {
  height: 43rem;

  .measure {
    padding: 0 !important;

    .ant-card-body {
      // padding: 15px !important;

      p {
        margin: 0;
        font-size: 1rem;
        color: #186bd0;
        display: inline-block;
      }

      div:nth-child(2) {
        padding: 10px;
        padding-left: 0;
        border-bottom: 1px solid #ddd;

        span {
          display: inline-block;
          margin-left: 0.2rem;
        }

        .icon {
          width: 22px;
          height: 22px;
          vertical-align: middle;
        }
      }

      div:nth-child(3) {
        padding: 10px;
        padding-left: 0;

        span {
          display: inline-block;
          margin-left: 0.2rem;
        }

        .icon {
          width: 22px;
          height: 22px;
          vertical-align: middle;
        }
      }
    }
  }

}

.ant-card-bordered {
  margin: 0.8rem;
  border-radius: 15px;
}
</style>