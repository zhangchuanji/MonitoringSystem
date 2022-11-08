<template>
  <div>
    <a-card class="xxx">
      <div class="top">
        狗 托 投 资 驾 驶 舱
      </div>
      <div class="content">
        <div style="position: absolute; top: -3rem; left: 1rem;" @click="fullScreen()" id="fullscreen" ref="fullscreen">
          <a-button>全屏显示</a-button>
        </div>
        <div class="left">
          <div class="left_top">
            <div class="left_top_title">
              <img
                src="https://finemaxdemo.fanruan.com/decision/view/form?id=__ImageCache__D43ACE32DDB0321F6DF1E5119392761E&cache=true&op=fr_attach&cmd=ah_image"
                alt="">
              <p style="color: #fff;">托管机构客户数统计</p>
              <img
                src="https://finemaxdemo.fanruan.com/decision/view/form?id=__ImageCache__599293CEAD697256ED210CAE2E1BFD42&cache=true&op=fr_attach&cmd=ah_image"
                alt="">
            </div>
            <div class="left_content">
              <dv-border-box8 :reverse="true" class="left_content_box">
                <div dv-bg>
                  <div class="left_content_box_top">
                    保险公司
                  </div>
                  <div class="left_content_box_content">
                    <div style="position: relative;">
                      <span style="font-size: 12px; color: #7bd7fd; margin-left: 10px;">客户数</span>
                      <span
                        style="color: #fff; font-size: 12px; font-weight: 900; position: absolute; right: 15px; top: 3px;">666</span>
                    </div>
                    <div class="borders"></div>
                    <div style="position: relative;">
                      <span style="font-size: 12px; color: #7bd7fd; margin-left: 10px;">客户EVA</span>
                      <span
                        style="color: #fff; font-size: 12px; font-weight: 900; position: absolute; right: 15px; top: 3px;">666</span>
                    </div>
                  </div>
                </div>
              </dv-border-box8>
              <dv-border-box8 :reverse="true" class="left_content_box">
                <div dv-bg>
                  <div class="left_content_box_top">
                    保险公司
                  </div>
                  <div class="left_content_box_content">
                    <div style="position: relative;">
                      <span style="font-size: 12px; color: #7bd7fd; margin-left: 10px;">客户数</span>
                      <span
                        style="color: #fff; font-size: 12px; font-weight: 900; position: absolute; right: 15px; top: 3px;">666</span>
                    </div>
                    <div class="borders"></div>
                    <div style="position: relative;">
                      <span style="font-size: 12px; color: #7bd7fd; margin-left: 10px;">客户EVA</span>
                      <span
                        style="color: #fff; font-size: 12px; font-weight: 900; position: absolute; right: 15px; top: 3px;">666</span>
                    </div>
                  </div>
                </div>
              </dv-border-box8>
              <dv-border-box8 :reverse="true" class="left_content_box">
                <div dv-bg>
                  <div class="left_content_box_top">
                    保险公司
                  </div>
                  <div class="left_content_box_content">
                    <div style="position: relative;">
                      <span style="font-size: 12px; color: #7bd7fd; margin-left: 10px;">客户数</span>
                      <span
                        style="color: #fff; font-size: 12px; font-weight: 900; position: absolute; right: 15px; top: 3px;">666</span>
                    </div>
                    <div class="borders"></div>
                    <div style="position: relative;">
                      <span style="font-size: 12px; color: #7bd7fd; margin-left: 10px;">客户EVA</span>
                      <span
                        style="color: #fff; font-size: 12px; font-weight: 900; position: absolute; right: 15px; top: 3px;">666</span>
                    </div>
                  </div>
                </div>
              </dv-border-box8>
            </div>
          </div>
          <div class="left_center">
            <div class="left_center_title">
              <img
                src="https://finemaxdemo.fanruan.com/decision/view/form?id=__ImageCache__D43ACE32DDB0321F6DF1E5119392761E&cache=true&op=fr_attach&cmd=ah_image"
                alt="">
              <p style="color: #fff;">资金沉淀统计</p>
              <img
                src="https://finemaxdemo.fanruan.com/decision/view/form?id=__ImageCache__599293CEAD697256ED210CAE2E1BFD42&cache=true&op=fr_attach&cmd=ah_image"
                alt="">
            </div>
            <div class="left_center_content">
              <img class="img_left"
                src="https://finemaxdemo.fanruan.com/decision/view/form?id=__ImageCache__2EC9D876BBB96FFD0DE8329B94B8F58&cache=true&op=fr_attach&cmd=ah_image"
                alt="">
              <img class="img_right"
                src="https://finemaxdemo.fanruan.com/decision/view/form?id=__ImageCache__C5862C569D1A20C55D4FE52B05865418&cache=true&op=fr_attach&cmd=ah_image"
                alt="">
              <div class="left_center_content_top">保险公司</div>
              <div ref="echartsRefBar" style="width: 100%; height: 100%;">
              </div>
            </div>
          </div>
          <div class="left_bottom">
            <div class="left_bottom_title">
              <img
                src="https://finemaxdemo.fanruan.com/decision/view/form?id=__ImageCache__D43ACE32DDB0321F6DF1E5119392761E&cache=true&op=fr_attach&cmd=ah_image"
                alt="">
              <p style="color: #fff;">资金沉淀分行Top5</p>
              <img
                src="https://finemaxdemo.fanruan.com/decision/view/form?id=__ImageCache__599293CEAD697256ED210CAE2E1BFD42&cache=true&op=fr_attach&cmd=ah_image"
                alt="">
            </div>
            <div class="left_bottom_content">
              <dv-scroll-ranking-board :waitTime="1" :config="config"
                style="width: 90%;height: 100%; margin: 0 auto;" />
            </div>
          </div>
        </div>
        <div class="centre">2</div>
        <div class="right">3</div>
      </div>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import { onMounted, ref, reactive } from 'vue';
import screenfull from 'screenfull'

const fullscreen = ref<HTMLElement>()

const echartsRefBar = ref<HTMLElement>()

const echartsRefPie = ref<HTMLElement>()

const EchartsItemBar = () => {
  const myEcharts = echarts.init(echartsRefBar.value!)
  //要操作的配置
  const option = {
    tooltip: {
      trigger: 'item',
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月'],
      axisTick: {
        alignWithLabel: true
      }
    },
    yAxis: [
      {
        type: 'value',
        name: "时点",
        position: "left",
        alignTicks: true
      },
      {
        type: 'value',
        name: "日均",
        position: "right",
        axisLabel: {
          show: true,
          interval: 0, // 使x轴文字显示全
          color: '#666666',
          formatter: '{value}%'  //y轴数值，带百分号
        },
      },
    ],
    series: [
      {
        data: [2100, 2400, 2350, 1700, 1600, 1900],
        type: 'bar',
        barWidth: "20%",
        itemStyle: {
          normal: {
            barBorderRadius: [10, 10, 10, 10],
            color: '#2f99ff'
          }
        }
      },
      {
        data: [0.15, 0.22, 0.18, 0.08, 0.06, 0.1],
        type: "line",
        yAxisIndex: 1,
      },
    ]
  };

  //设置配置
  myEcharts.setOption(option)
}

const fullScreen = () => {
  //全屏
  var full = document.getElementById('fullscreen')
  launchIntoFullscreen(full)
}

//全屏封装
const launchIntoFullscreen = (element: any) => {
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  }
}
//退出全屏封装
const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
}
const config = reactive({
  data: [
    {
      name: '周口',
      value: 55,
    },
    {
      name: '南阳',
      value: 120,
    },
    {
      name: '西峡',
      value: 78,
    },
    {
      name: '驻马店',
      value: 66,
    },
    {
      name: '新乡',
      value: 80,
    },
    {
      name: '信阳',
      value: 45,
    },
    {
      name: '漯河',
      value: 29,
    },
  ],
  unit: '万元',
})

onMounted(() => {
  EchartsItemBar()
})

</script>

<style lang="scss">
.ant-card-bordered {
  margin: 0.8rem;
  border-radius: 0;
  border: none;
}

.xxx {
  height: 100%;
  background: url('../../../public/背景3.png') no-repeat;
  background-size: cover;

  .ant-card-body {
    height: 100%;
    padding: 0;
  }

  .top {
    width: 1624px;
    height: 100px;
    background: url('../../../public/蓝色光效大标题框.png') no-repeat;
    background-size: 100% 100%;
    text-align: center;
    line-height: 70px;
    font-size: 29px;
    font-weight: 900;
    color: #fff;
  }

  .content {
    width: 100%;
    height: 95vh;
    display: flex;
    position: relative;

    .left {
      width: 100%;
      height: 500px;
      margin: 10px;
      flex: 1;

      .left_top {
        width: 100%;

        .left_top_title {
          width: 100%;
          height: 30px;
          line-height: 30px;
          display: flex;
          display: table;

          img:nth-child(1) {
            width: 16px;
            height: 18px;
            display: table-cell;
            vertical-align: middle;
            margin-left: 2px;
          }

          p {
            width: 200px;
            font-size: 18px;
            font-weight: 900;
            margin-left: 10px;
            display: table-cell;
            margin-right: 10px;
          }
        }

        .left_content {
          width: 100%;
          color: #fff;
          display: flex;

          .left_content_box {
            width: 33%;
            height: 6.7xrem;
            background: linear-gradient(to top, #031e46 0%, #024c98 50%, #031e46 100%);


            .left_content_box_top {
              width: 94%;
              height: 2rem;
              line-height: 2rem;
              margin-top: 0.25rem;
              margin-left: 0.26rem;
              text-align: center;
              background: linear-gradient(to bottom, #03173b 0%, #032957 50%);
            }

            .left_content_box_content {
              color: #fff;
              width: 94%;
              margin-top: 0.25rem;
              margin-left: 0.26rem;

              div {
                height: 30px;
                margin-top: 5px;
              }

              div:nth-child(3) {
                height: 30px;
                margin-top: 0;
              }

              .borders {
                width: 90%;
                height: 2px;
                background: linear-gradient(to top, #032853 0%, #0172a3 50%);
                margin: 0 auto;
              }
            }
          }
        }
      }

      .left_center {
        width: 100%;
        margin-top: 1.5rem;

        .left_center_title {
          width: 100%;
          height: 30px;
          line-height: 30px;
          display: table;

          img:nth-child(1) {
            width: 16px;
            height: 18px;
            display: table-cell;
            vertical-align: middle;
            margin-left: 2px;
          }

          p {
            width: 200px;
            font-size: 18px;
            font-weight: 900;
            margin-left: 10px;
            display: table-cell;
            margin-right: 10px;
          }
        }

        .left_center_content {
          width: 100%;
          height: 300px;
          background: url('https://finemaxdemo.fanruan.com/decision/view/form?id=__ImageCache__51D2DFB7A77975CF0E56FBC7A00368E2&cache=true&op=fr_attach&cmd=ah_image') no-repeat;
          background-size: 100% 100%;
          overflow: hidden;
          position: relative;

          .img_left {
            width: 30px;
            height: 30px;
            position: absolute;
            top: 0.8rem;
            left: 7rem;
          }

          .img_right {
            width: 30px;
            height: 30px;
            position: absolute;
            top: 0.8rem;
            right: 7rem;
          }

          .left_center_content_top {
            font-size: 22px;
            margin-top: 10px;
            color: #fff;
            text-align: center;
          }
        }
      }

      .left_bottom {
        width: 100%;
        margin-top: 1.5rem;

        .left_bottom_title {
          width: 100%;
          height: 30px;
          line-height: 30px;
          display: flex;
          display: table;

          img:nth-child(1) {
            width: 16px;
            height: 18px;
            display: table-cell;
            vertical-align: middle;
            margin-left: 2px;
          }

          p {
            width: 200px;
            font-size: 18px;
            font-weight: 900;
            margin-left: 10px;
            display: table-cell;
            margin-right: 10px;
          }
        }

        .left_bottom_content {
          width: 100%;
          height: 300px;
          background: url('https://finemaxdemo.fanruan.com/decision/view/form?id=__ImageCache__51D2DFB7A77975CF0E56FBC7A00368E2&cache=true&op=fr_attach&cmd=ah_image') no-repeat;
          background-size: 100% 100%;
        }
      }

    }

    .centre {
      width: 100%;
      height: 500px;
      flex: 2;
    }

    .right {
      width: 100%;
      height: 500px;
      margin: 10px;
      margin-top: 0;
      flex: 1;
    }
  }
}
</style>