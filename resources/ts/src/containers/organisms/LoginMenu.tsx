import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { postByAxios } from '../../utilities/axios'
import LoginMenu from '../../components/organisms/LoginMenu'

type Props = {
  className: string
}

const LoginMenuContainer: FC<Props> = ({ className }) => {
  const dispatch = useDispatch()
  const [email, setMail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const login = async () => {
    const result = await postByAxios.login({
      dispatch,
      email,
      password,
    })
    if (result === 'success')
      console.log('Login was successful')
  }

  return (
    <LoginMenu
      className={className}
      setMail={setMail}
      setPassword={setPassword}
      login={login}
    />
  )
}

export default LoginMenuContainer
