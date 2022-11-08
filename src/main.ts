import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import '@/assets/css/reset.css'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalAxios } from './request'
import BaiduMap from 'vue-baidu-map-3x'
import dataV from '@kjgl77/datav-vue3'


const app = createApp(App)
// 引入百度地图
app.use(BaiduMap, {
  // 百度地图密钥 // 通过链接获取https://lbsyun.baidu.com/apiconsole/key#/home
  ak: 'kEtGonWj3y6MBD5BCXvvEAjRpKSWYWeq',
});

app.use(dataV)

// 使用antd
app.use(Antd)

// 使用全局axios
app.use(globalAxios)

// 使用vuex
app.use(store)

// 使用路由
app.use(router)

router.isReady().then(() => app.mount('#app'))
