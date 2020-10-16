import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLoginState } from '../../actions/loginState'
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
        console.log(res)
        console.log(res.data)
        // console.log(res.data)
        // console.log(res.config.data)
        dispatch(setLoginState(true))
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
