import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import RegistForm from '../../components/organisms/RegistForm'
import { registUserData } from '../../utilities/axios'

const RegistFormContainer: FC = () => {
  const dispatch = useDispatch()
  const [username, setUserName] = useState<string>('')
  const [email, setMail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const regist = () => {
    registUserData(dispatch, username, email, password)
  }

  return (
    <RegistForm
      setUserName={setUserName}
      setMail={setMail}
      setPassword={setPassword}
      regist={regist}
    />
  )
}

export default RegistFormContainer
