import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import {
  setLoginState,
  setLoginInfo,
} from '../../actions/login'
import UserMenu from '../../components/organisms/UserMenu'

type Props = {
  className: string
}

const UserMenuContainer: FC<Props> = ({ className }) => {
  const dispatch = useDispatch()
  const name = 'こんこん'
  const iconUrl = ''

  const logout = () => {
    // ログイン情報を初期化
    dispatch(setLoginState(false))
    dispatch(setLoginInfo(0, 'unknown', '', '', null))
  }

  return (
    <UserMenu
      className={className}
      name={name}
      iconUrl={iconUrl}
      logout={logout}
    />
  )
}

export default UserMenuContainer
