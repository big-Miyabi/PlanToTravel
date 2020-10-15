import React, { FC, useState } from 'react'
import Header from '../../components/organisms/Header'

const HeaderContainer: FC = () => {
  const [isUserMenuActive, setIsUserMenuActive] = useState(
    false
  )
  const [isSearchActive, setIsSearchActive] = useState(
    false
  )
  const showUserMenu = () => {
    isUserMenuActive
      ? setIsUserMenuActive(false)
      : setIsUserMenuActive(true)
  }
  const showSearchMenu = () => {
    isSearchActive
      ? setIsSearchActive(false)
      : setIsSearchActive(true)
  }

  return (
    <Header
      isMenuActive={isUserMenuActive}
      isSearchActive={isSearchActive}
      showUserMenu={showUserMenu}
      showSearchMenu={showSearchMenu}
    />
  )
}

export default HeaderContainer
