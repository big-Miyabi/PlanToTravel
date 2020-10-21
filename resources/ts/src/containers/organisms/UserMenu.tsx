import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setLoginState,
  setLoginInfo,
} from '../../actions/login'
import { RootState } from '../../reducers/index'
import UserMenu from '../../components/organisms/UserMenu'

type Props = {
  className: string
}

const UserMenuContainer: FC<Props> = ({ className }) => {
  const dispatch = useDispatch()
  const { username, icon } = useSelector(
    (state: RootState) => state.loginReducer
  )

  const logout = () => {
    // ログイン情報を初期化
    dispatch(setLoginState(false))
    dispatch(setLoginInfo(0, 'unknown', '', '', null))
  }

  return (
    <UserMenu
      className={className}
      name={username}
      iconUrl={icon}
      logout={logout}
    />
  )
}

export default UserMenuContainer
