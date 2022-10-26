<template>
  <div class="login-container">
    <a-row>
      <a-col :xs="0" :md="0" :sm="12" :lg="14" :xl="9"></a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="10" :xl="7">
        <div class="login-container-form">
          <div class="login_logo">
            <img src="@/assets/login/logo.png" alt="" />
            <p>极寒后台管理系统</p>
          </div>
          <!-- <div class="XXX" v-show="isShow">
            <slide-verify ref="block" :w="480" :h="200" :slider-text="text" :accuracy="accuracy" @again="onAgain" @success="onSuccess" @fail="onFail" @refresh="onRefresh"></slide-verify>
          </div > -->
          <a-form ref="formRef" :model="form" v-show="!isShow" :rules="rules" @keyup.enter="handleSubmit">
            <a-form-item name="username">
              <a-input v-model:value="form.username" autocomplete="off" placeholder="请输入账号">
                <template v-slot:prefix>
                  <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item name="password">
              <a-input-password v-model:value="form.password" autocomplete="off" placeholder="请输入密码">
                <template v-slot:prefix>
                  <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input-password>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" @click="handleSubmit()">
                登录
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { LoginFrom } from '@/types/views/login'
import { defineComponent, reactive, ref, UnwrapRef } from "vue"
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import SlideVerify, { SlideVerifyInstance } from "vue3-slide-verify";
import "vue3-slide-verify/dist/style.css";
import { log } from 'console'
export default defineComponent({
  name: "login",
  components: {
    UserOutlined,
    LockOutlined,
    SlideVerify
  },
  setup() {

    // 表单数据
    const form = data_form()

    const rules = reactive({
      username: [
        {
          required: true,
          message: '请输入账号',
          trigger: 'change'
        }
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'change'
        }
      ]
    })

    const formRef = ref()

    const store = useStore()

    const router = useRouter()

    /**
     * @desc: 登录提交
     * @param 无
     */
    const handleSubmit = (): void => {
      // isShow.value = true
      formRef.value.validate().then(() => {
        store.dispatch('user/login', form).then(e => {
          const route = router.currentRoute.value
          const url = route.query.redirect || '/'
          router.push(url as string)
        }).catch(err => {
          message.error(err.message || err.data.message)
        })
      })
    }

    const msg = ref("");
    const block = ref<SlideVerifyInstance>();

    const onAgain = () => {
      msg.value = "检测到非人为操作的哦！ try again";
      // 刷新
      block.value?.refresh();
    };

    const onSuccess = (times: number) => {
      isShow.value = false
      formRef.value.validate().then(() => {
        store.dispatch('user/login', form).then(e => {
          const route = router.currentRoute.value
          const url = route.query.redirect || '/'
          router.push(url as string)
        }).catch(err => {
          message.error(err.message || err.data.message)
        })
      })
      message.success(`登录耗时${(times / 1000).toFixed(1)}s`)
    };

    const onFail = () => {
      message.error("认真点哦笨蛋~")
    };

    const onRefresh = () => {
      message.success("刷新成功！")
    };

    const isShow = ref(false)

    return {
      formRef,
      form,
      rules,
      handleSubmit,
      block,
      msg,
      text: "向右滑动->",
      accuracy: 1,
      onAgain,
      onSuccess,
      onFail,
      onRefresh,
      isShow,
    }

  },
});

function data_form() {
  const form: UnwrapRef<LoginFrom> = reactive({
    username: "admin",
    password: "123456"
  })
  return form
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: url('/src/assets/login/login_bg.png');
  background-size: cover;
  overflow: hidden;

  & .login-container-form {
    width: 100%;
    height: 500px;
    padding: 4vh;
    margin-top: calc((100vh - 380px) / 2);
    background: url('/src/assets/login/form_bg.png');
    background-size: 100% 100%;
    border-radius: 10px;
    box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);

    .ant-form { 
      margin-top: 3rem;

      .ant-form-item {
        margin-bottom: 36px;
      }
    }

    .login_logo {
      width: 100%;  
      display: flex;
      margin-top: 2rem;

      img {
        width: 6rem;
        height: 6rem;
        margin-left: 1rem;
      }

      p {
        font-size: 2.5rem;
        font-weight: 900;
        color: #fff;
        margin: 12px;
        margin-left: 20px;
      }
    }

    & .login-container-hello {
      font-size: 32px;
      color: #fff;
    }

    & .login-container-title {
      margin-bottom: 30px;
      font-size: 20px;
      color: #fff;
    }
  }

  .login-container-tips {
    position: fixed;
    bottom: 10px;
    width: 100%;
    height: 40px;
    color: rgba(255, 255, 255, 0.856);
    text-align: center;
  }
}
</style>
<style lang="scss">
.login-container {
  & .login-container-form {
    & .ant-col {
      width: 100%;
      padding: 0 10px 0 10px;
    }

    & .ant-input {
      height: 35px;
    }

    & .ant-btn {
      width: 100%;
      height: 45px;
      border-radius: 99px;
    }

    & .ant-form-item-explain-error {
      color: #faad14;
    }

    & .ant-form-item-has-error {
      border-color: #faad14;
    }
  }
}
.XXX {
  position: fixed;
  top: 50%;
}
</style>