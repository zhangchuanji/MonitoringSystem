<template>
  <div class="main__container">
    <transition>
      <router-view v-slot="{ Component }">
        <keep-alive :include="includeList">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </transition>
  </div>
</template>
<script lang="ts">
import { mapState, useStore } from 'vuex'
import { TabItem } from '@/store/modules/tabs'
import { defineComponent, watch, onBeforeMount, ref } from 'vue'
import { useRoute, useRouter, RouteLocationNormalizedLoaded } from 'vue-router'
export default defineComponent({
  name: 'layoutTabs',
  computed: {
    ...mapState({
      tabList: (state: any) => state.tabs.tabList as TabItem[],
      includeList: (state: any) => state.keepAlive.includeList
    })
  }, 
})
</script>
<style lang="scss" scoped>
 .main__container {
  background-color: #FFF;
  min-height: 280px;
  overflow: hidden;
}
</style>
<style lang="scss">
.tabs__view {
  & .ant-tabs-tab {
    user-select: none;
    padding: 0 16px 0 0 !important;
    & .ant-dropdown-trigger {
      padding-left: 16px;
    }
  }
  & .ant-tabs-bar {
    margin: 0 0 8px 0;
    border-bottom: 1px solid #669adb;
  }
  & .ant-tabs-tab-active {
    font-weight: normal;
    border-bottom: 1px solid #f0f0f0 !important;
  }
}

.v-enter-from, .v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.v-enter-active {
  transition: all 1s ease-in;
}
</style>