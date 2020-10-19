import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setShouldShowMenu } from '../../actions/menu'
import Header from '../../components/organisms/Header'

const HeaderContainer: FC = () => {
  const dispatch = useDispatch()
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [isSearchActive, setIsSearchActive] = useState(
    false
  )
  const showMenu = () => {
    setIsMenuActive(!isMenuActive)
    dispatch(setShouldShowMenu(!isMenuActive))
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
