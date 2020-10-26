import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers/index'
import UserMenu from '../../containers/organisms/UserMenu'
import LoginMenu from '../../containers/organisms/LoginMenu'

const Menu: FC = () => {
  const isLogin = useSelector(
    (state: RootState) => state.loginReducer.state
  )
  const shouldShowMenu = useSelector(
    (state: RootState) => state.menuReducer.shouldShow
  )
  const style = shouldShowMenu ? {} : { display: 'none' }

  return (
    <>
      <div className="menu" style={style}>
        {isLogin ? (
          <UserMenu className="menu__contents--user" />
        ) : (
          <LoginMenu className="menu__contents--login" />
        )}
      </div>
      <div style={style} className="menu-overlay"></div>
    </>
  )
}

export default Menu
