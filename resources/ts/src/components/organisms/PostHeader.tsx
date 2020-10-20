import React, { FC } from 'react'
import { colors } from '../../utilities/colors'
import NaviIcon from '../atoms/svg/NaviIcon'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

type Props = {
  isMenuActive: boolean
  switchMenuDisplay: () => void
}

const Header: FC<Props> = ({ ...props }) => {
  const { isMenuActive, switchMenuDisplay } = props

  return (
    <div className="post-header">
      <NaviIcon
        className="post-header__menu"
        color={
          isMenuActive ? colors.yellow : colors.lightGray
        }
        onClick={() => switchMenuDisplay()}
      />
      <FontAwesomeIconBtn
        className="post-header__close"
        icon={faTimes}
      />
    </div>
  )
}

export default Header
