import React, { FC, useState, Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Login: FC = () => {
  const [email, setMail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const loginUser = () => {
    axios
      .post('/api/login', {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(email)
        console.log(password)
        console.log(error)
      })
  }
  const logoutUser = () => {
    axios
      .post('/api/logout')
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log({ loginUser })
        console.log(error)
      })
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
    </>
  )
}

export default Login
