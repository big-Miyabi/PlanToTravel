import { Dispatch } from 'react'
import {
  setLoginState,
  setLoginInfo,
} from '../actions/login'
import axios from 'axios'

type Login = {
  dispatch: Dispatch<any>
  email: string
  password: string
}

type Regist = Login & {
  username: string
}

type PostByAxios = {
  regist: (arg: Regist) => Promise<string>
  login: (arg: Login) => Promise<string>
}

export const postByAxios: PostByAxios = {
  // 登録処理
  regist: (arg: Regist): Promise<string> => {
    return new Promise((resolve) => {
      axios
        .post('/api/register', {
          username: arg.username,
          email: arg.email,
          password: arg.password,
        })
        .then((res) => {
          console.log(res)
          const userData = res.data[0]
          console.log(userData)
          arg.dispatch(setLoginState(true))
          arg.dispatch(
            setLoginInfo(
              userData.id,
              userData.username,
              userData.header,
              userData.icon,
              userData.profile
            )
          )
          resolve('success')
        })
        .catch((error) => {
          // エラー処理
          console.log(error)
          resolve('failed')
        })
    })
  },
  // ログイン処理
  login: (arg: Login): Promise<string> => {
    return new Promise((resolve) => {
      axios
        .post('/api/login', {
          email: arg.email,
          password: arg.password,
        })
        .then((res) => {
          console.log(res)
          const userData = res.data[0]
          arg.dispatch(setLoginState(true))
          arg.dispatch(
            setLoginInfo(
              userData.id,
              userData.username,
              userData.header,
              userData.icon,
              userData.profile
            )
          )
          resolve('success')
          console.log(res.data)
        })
        .catch((error) => {
          // エラー処理
          console.log(error)
          resolve('failed')
        })
    })
  },
}
