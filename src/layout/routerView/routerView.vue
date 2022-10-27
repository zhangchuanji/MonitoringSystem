<template>
  <transition>
    <router-view v-slot="{ Component }">
      <keep-alive :include="includeList">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </transition>
</template>
<script lang="ts">
import { mapState } from 'vuex'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'layoutView',
  computed: {
    ...mapState({
      includeList: (state: any) => state.keepAlive.includeList
    })
  }
})
</script>
<style>
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.v-enter-active {
  transition: all 1s ease-in;
}
</style>