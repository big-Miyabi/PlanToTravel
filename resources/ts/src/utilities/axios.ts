import { Dispatch } from 'react'
import {
  setLoginState,
  setLoginInfo,
} from '../actions/login'
import axios from 'axios'

export const registUserData = (
  dispatch: Dispatch<any>,
  username: string,
  email: string,
  password: string
): Promise<string> => {
  return new Promise((resolve) => {
    axios
      .post('/api/register', {
        username,
        email,
        password,
      })
      .then((res) => {
        console.log(res)
        const userData = res.data[0]
        console.log(userData)
        dispatch(setLoginState(true))
        dispatch(
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
}
