import React, { FC } from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'

type Props = {
  className: string
  title: string
  icon: IconDefinition
  onClick?: () => void
}

const MenuItem: FC<Props> = ({
  className,
  title,
  icon,
  onClick = () => {},
}) => {
  return (
    <div
      className={className + ' ' + 'menu-item'}
      onClick={onClick}
    >
      <FontAwesomeIconBtn
        className="menu-item__icon"
        icon={icon}
      />
      <p className="menu-item__title">{title}</p>
    </div>
  )
}

export default MenuItem
