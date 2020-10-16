import React, { FC } from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { colors } from '../../utilities/colors'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import MapIcon from '../atoms/svg/MapIcon'

type Props = {
  className: string
  title: string
  icon: IconDefinition | 'MapIcon'
}

const MenuItem: FC<Props> = ({
  className,
  title,
  icon,
}) => {
  return (
    <div className={className + ' ' + 'menu-item'}>
      {icon === 'MapIcon' ? (
        <MapIcon
          className="menu-item__icon"
          color={colors.lightGray}
        />
      ) : (
        <FontAwesomeIconBtn
          className="menu-item__icon"
          icon={icon}
        />
      )}
      <p className="menu-item__title">{title}</p>
    </div>
  )
}

export default MenuItem
