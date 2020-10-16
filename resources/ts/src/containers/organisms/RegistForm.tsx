import React, { FC, useState } from 'react'
import RegistForm from '../../components/organisms/RegistForm'
import axios from 'axios'

const RegistFormContainer: FC = () => {
  const [username, setUserName] = useState<string>('')
  const [email, setMail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const registUserData = () => {
    axios
      .post('/api/register', {
        username,
        email,
        password,
      })
      .then((res) => {
        console.log(res.config.data)
      })
      .catch((error) => {
        // エラー処理
      })
  }

  return (
    <RegistForm
      setUserName={setUserName}
      setMail={setMail}
      setPassword={setPassword}
      registUserData={registUserData}
    />
  )
}

export default RegistFormContainer
