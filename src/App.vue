<template>
  <transition>

    <a-config-provider v-bind="getPopupContainer">
      <router-view></router-view>
    </a-config-provider>

  </transition>

</template>

<script lang="ts">
import 'moment/dist/locale/zh-cn'
import { defineComponent } from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
export default defineComponent({
  name: 'App',
  data() {
    return {
      getPopupContainer: {
        locale: zhCN
      }
    }
  }
})
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
.v-enter-to, .v-leave-from {
  opacity: 1;
  transform: translateY(0%);
}

.v-enter-active {
  transition: all 2s ease;
}
.v-leave-active {
  transition: all 1.2s ease-in-out;
}
</style>
