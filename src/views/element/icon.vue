<template>
  <div class="icon__container">
    <ul class="icons">
      <li><a-icon type="AndroidOutlined" /></li>
      <li><a-icon type="AppleOutlined" /></li>
      <li><a-icon type="TwitterOutlined" /></li>
      <li><a-icon type="DropboxOutlined" /></li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import aIcon from '@/components/aicon/aicon.vue'
export default defineComponent({
  name: 'el_icon',
  components: {
    aIcon
  },
  setup () {
    onMounted(() => {
      console.log(123)
    })
  }
})
</script>
<style lang="scss" scoped>
.icon__container {
  padding: 20px;
  & .tip {
    font-size: 14px;
    font-weight: bold;
  }
  & pre {
    background-color: #f6f6f6;
    padding: 10px
  }
  & .icons {
    display: flex;
    margin: 0;
    padding: 0;
    & li {
      margin-right: 10px;
      list-style: none;
      font-size: 24px;
      cursor: pointer;
    }
  }
}
</style>