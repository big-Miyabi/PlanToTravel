import React, { FC, useState } from 'react'
import axios from 'axios'

const Register: FC = () => {
  const [username, setUserName] = useState<string>('')
  const [email, setMail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const icon = 'default'
  const header =
    'https://i.gyazo.com/de7ceb1d7eeb05c25968693df1ffc358.png'
  const postUserData = () => {
    axios
      .post('/api/register', {
        username,
        email,
        password,
        // icon,header,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(username)
        console.log(password)
        console.log(email)
        console.log(icon)
        console.log(header)
        console.log(error)
      })
  }

  return (
    <>
      <p>{username}</p>
      <p>{email}</p>
      <p>{password}</p>
      <label>
        UserName
        <br />
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
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
      <button onClick={postUserData}>登録</button>
    </>
  )
}

export default Register
