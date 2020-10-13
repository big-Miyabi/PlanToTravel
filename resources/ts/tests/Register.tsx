import React, { FC, useState} from 'react';

const Register:FC = () => {
  const [username, setUserName] = useState<string>("")
  const [mail, setMail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const icon = "default";
  const header = "https://i.gyazo.com/de7ceb1d7eeb05c25968693df1ffc358.png";

  return (
    <>
      <p>{username}</p>
      <p>{mail}</p>
      <p>{password}</p>
      <label>
        UserName<br />
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
      </label>
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
      <button>登録</button>
    </>
  )
}

export default Register
