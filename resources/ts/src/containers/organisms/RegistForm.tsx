import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as H from 'history'
import RegistForm from '../../components/organisms/RegistForm'
import { postByAxios } from '../../utilities/axios'

type Props = {
  history: H.History
}

const RegistFormContainer: FC<Props> = ({ history }) => {
  const dispatch = useDispatch()
  const [username, setUserName] = useState<string>('')
  const [email, setMail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const regist = async () => {
    const result = await postByAxios.regist({
      dispatch,
      username,
      email,
      password,
    })
    if (result === 'success') history.push('../home')
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
