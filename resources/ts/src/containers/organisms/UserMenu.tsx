import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers/index'
import UserMenu from '../../components/organisms/UserMenu'

const UserMenuContainer: FC = () => {
  const [email, setMail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const isLogin = useSelector(
    (state: RootState) => state.loginReducer.state
  )

  return (
    <UserMenu
      isLogin={isLogin}
      setMail={setMail}
      setPassword={setPassword}
    />
  )
}

export default UserMenuContainer
