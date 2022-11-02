<template>
  <div>
    <a-card class="qwe">
      <div class="tag">
        <HomeFilled /> {{ TabMenu }}
      </div>
    </a-card>
    <a-card class="xxx">
      <a-card>
        <div>
          <p>保定仓温度预警趋势图。-</p>
        </div>
      </a-card>
      <a-card>
        <div>
          <p></p>
        </div>
      </a-card>
      <a-card>
        <div>
          <p></p>
        </div>
      </a-card>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, toRaw } from 'vue';
import { useRouter } from "vue-router";
import { HomeFilled, EditTwoTone } from '@ant-design/icons-vue';

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

.ant-card-bordered {
  margin: 0.8rem;
  border-radius: 15px;
}
</style>