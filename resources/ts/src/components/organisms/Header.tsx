import React, { FC } from 'react'
import { colors } from '../../utilities/colors'
import NaviIcon from '../atoms/svg/NaviIcon'
import SearchIcon from '../atoms/svg/SearchIcon'

// type Props = {}

const Header: FC = () => {
  return (
    <div className="header">
      <NaviIcon
        className="header__menu"
        color={colors.lightGray}
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
        color={colors.lightGray}
      />
    </div>
  )
}

export default Header
