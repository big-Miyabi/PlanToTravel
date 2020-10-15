import React, { FC, useState } from 'react'
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
        console.log(res.config.data)
      })
      .catch((error) => {
        console.log(password)
        console.log(email)
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
    </>
  )
}

export default Login
