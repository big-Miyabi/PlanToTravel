import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  setLoginState,
  setLoginInfo,
} from '../../actions/login'
import RegistForm from '../../components/organisms/RegistForm'
import axios from 'axios'

const RegistFormContainer: FC = () => {
  const dispatch = useDispatch()
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
        const userData = res.data[0]
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
