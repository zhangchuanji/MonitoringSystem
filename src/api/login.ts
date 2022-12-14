import request from '../request'
import { AxiosResponse } from 'axios'
import { LoginFrom } from '@/types/views/login'
import { ResponseData } from '@/types/api/public'
import { LoginSuccess, UserInfo, RouterData } from '@/types/api/login'

type ConfigType<T=ResponseData> = Promise<AxiosResponse<T>>

/**
 * @desc: 登录
 * @param { Object } data 输入的账号密码
 */
export const login = (data: LoginFrom): ConfigType<LoginSuccess> => {
  return request({
    url: 'users/login',
    method: 'post',
    data
  })
}

/**
 * @desc: 获取用户信息
 * @returns data
 */
export const info = (): ConfigType<UserInfo> => {
  return request({
    url: 'users/info',
    method: 'get'
  })
}

/**
 * @desc: 退出登录
 */
 export const logout = (): ConfigType => {
  return request({
    url: '/logout',
    method: 'post'
  })
}