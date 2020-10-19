import React, { FC, useState } from 'react'
import LoginMenu from '../../components/organisms/LoginMenu'

type Props = {
  className: string
}

const LoginMenuContainer: FC<Props> = ({ className }) => {
  const [email, setMail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <LoginMenu
      className={className}
      setMail={setMail}
      setPassword={setPassword}
    />
  )
}

export default LoginMenuContainer
