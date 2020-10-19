import React, { FC, useState } from 'react'
import Header from '../../components/organisms/Header'

const HeaderContainer: FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [isSearchActive, setIsSearchActive] = useState(
    false
  )
  const showMenu = () => {
    isMenuActive
      ? setIsMenuActive(false)
      : setIsMenuActive(true)
  }
  const showSearchMenu = () => {
    isSearchActive
      ? setIsSearchActive(false)
      : setIsSearchActive(true)
  }

  return (
    <Header
      isMenuActive={isMenuActive}
      isSearchActive={isSearchActive}
      showMenu={showMenu}
      showSearchMenu={showSearchMenu}
    />
  )
}

export default HeaderContainer
