import React, { FC } from 'react'
import { colors } from '../../utilities/colors'
import NaviIcon from '../atoms/svg/NaviIcon'
import SearchIcon from '../atoms/svg/SearchIcon'

type Props = {
  isMenuActive: boolean
  isSearchActive: boolean
  showMenu: () => void
  showSearchMenu: () => void
}

const Header: FC<Props> = ({ ...props }) => {
  const {
    isMenuActive,
    isSearchActive,
    showMenu,
    showSearchMenu,
  } = props

  return (
    <div className="header">
      <NaviIcon
        className="header__menu"
        color={
          isMenuActive ? colors.yellow : colors.lightGray
        }
        onClick={() => showMenu()}
      />
      <h1 className="header__logo-wrap">
        <img
          className="header__logo"
          alt="PLAN TO TRAVEL"
          src="../images/logo_yoko.png"
        />
      </h1>
      <SearchIcon
        className="header__search"
        color={
          isSearchActive ? colors.yellow : colors.lightGray
        }
        onClick={() => showSearchMenu()}
      />
    </div>
  )
}

export default Header
