import React, { FC, useState} from 'react';

const Register:FC = () => {
  const [username, setUserName] = useState<string>("")
  const [email, setMail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const icon = "default";
  const header = "https://i.gyazo.com/de7ceb1d7eeb05c25968693df1ffc358.png";

  return (
    <form method="POST" action="">
      <p>{username}</p>
      <p>{email}</p>
      <p>{password}</p>
      <label>
        UserName<br />
        <input type="text" value="" onChange={(e) => setUserName(e.target.value) } />
      </label>
      <br />
      <label>
        email<br />
        <input type="text" value=""onChange={(e) => setMail(e.target.value)}/>
      </label>
      <br />
      <label>
        password<br />
        <input type="password" value="" onChange={(e) => setPassword(e.target.value)}/>
      </label>
      <br />
      <button type="submit">登録</button>
    </form>
  )
}

export default Register
