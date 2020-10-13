import React, { FC, useState} from 'react';

const Login:FC = () => {
  const [mail, setMail] = useState<string>("")
  const [password, setPassword] = useState<string>("")


  return (
    <>
      <p>{mail}</p>
      <p>{password}</p>
      <br />
      <label>
        mail<br />
        <input type="text" onChange={(e) => setMail(e.target.value)}/>
      </label>
      <br />
      <label>
        password<br />
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
      </label>
      <br />
      <p><a href="#">パスワードをお忘れですか？</a></p>
      <br />
      <button>ログイン</button>
      <br />
      <p><a href="#">パスワードをお忘れですか？</a></p>

    </>
  )
}

export default Login
