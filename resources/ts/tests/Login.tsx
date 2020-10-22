import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postByAxios } from '../src/utilities/axios'
import {
  setLoginState,
  setLoginInfo,
} from '../src/actions/login'
import { RootState } from '../src/reducers/index'

const Login: FC = () => {
  const dispatch = useDispatch()
  const [email, setMail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  // ログイン情報を取得
  const loginInfo = useSelector(
    (state: RootState) => state.loginReducer
  )

  // ログイン処理
  const loginUser = async () => {
    const result = await postByAxios.login({
      dispatch,
      email,
      password,
    })
    if (result === 'success')
      console.log('Login was successful')
  }

  //ログアウト処理
  const logoutUser = () => {
    // ログイン情報を初期化
    dispatch(setLoginState(false))
    dispatch(setLoginInfo(-1, 'unknown', '', '', null))
  }

  return (
    <>
      <p>{email}</p>
      <p>{password}</p>

      <br />
      <label>
        email
        <br />
        <input
          type="text"
          onChange={(e) => setMail(e.target.value)}
        />
      </label>
      <br />
      <label>
        password
        <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <p>
        <a href="#">パスワードをお忘れですか？</a>
      </p>
      <br />
      <button onClick={loginUser}>ログイン</button>
      <br />
      <p>
        <a href="#">パスワードをお忘れですか？</a>
      </p>
      <button onClick={logoutUser}>ログアウト</button>
      <div>
        <h1>
          {loginInfo.state ? 'ログイン中' : 'ログアウト'}
        </h1>
        <p>id: {loginInfo.id}</p>
        <p>ユーザー名: {loginInfo.username}</p>
      </div>
    </>
  )
}

export default Login
