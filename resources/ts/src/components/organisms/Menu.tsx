import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers/index'
import UserMenu from '../../containers/organisms/UserMenu'
import LoginMenu from '../../containers/organisms/LoginMenu'

const Menu: FC = () => {
  // const isLogin = useSelector(
  //   (state: RootState) => state.loginReducer.state
  // )
  const isLogin = true // テスト用、後で消す

  return (
    <div className="menu">
      {isLogin ? (
        <UserMenu className="menu__contents--user" />
      ) : (
        <LoginMenu className="menu__contents--login" />
      )}
    </div>
  )
}

export default Menu
