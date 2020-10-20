import React, { FC } from 'react'
import { colors } from '../../utilities/colors'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import NaviIcon from '../atoms/svg/NaviIcon'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import PostImage from '../../containers/molecules/PostImage'

type Props = {
  isMenuActive: boolean
  switchMenuDisplay: () => void
}

const Header: FC<Props> = ({ ...props }) => {
  const { isMenuActive, switchMenuDisplay } = props

  return (
    <div className="post-header">
      <div className="post-header__icons">
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
      <PostImage />
    </div>
  )
}

export default Header
