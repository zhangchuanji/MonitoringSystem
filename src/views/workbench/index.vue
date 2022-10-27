<template>
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
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted, ref } from 'vue';


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
  console.log(state);
  
  times.value = state.date + " / " + state.time
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
})
</script>

<style lang="scss">
.top {
  width: 100%;
  height: 100px;

  .ant-card-bordered {
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
    width: 50%;
    height: 100%;
    display: inline-block;

    div {
     display: inline-block;
     
     p{
      margin: 0;
     }
    }
  }

}
</style>