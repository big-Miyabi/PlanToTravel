import React, { FC, useState } from 'react'
import UserMenu from '../../components/organisms/UserMenu'

const UserMenuContainer: FC = () => {
  const [email, setMail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const isLogin = true

  return (
    <UserMenu
      isLogin={isLogin}
      setMail={setMail}
      setPassword={setPassword}
    />
  )
}

export default UserMenuContainer
