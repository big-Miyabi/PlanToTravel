import React, { FC, useState } from 'react'
import UserMenu from '../../components/organisms/UserMenu'

const UserMenuContainer: FC = () => {
  const [email, setMail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <UserMenu setMail={setMail} setPassword={setPassword} />
  )
}

export default UserMenuContainer
