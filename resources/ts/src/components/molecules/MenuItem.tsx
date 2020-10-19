import React, { FC } from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'

type Props = {
  className: string
  title: string
  icon: IconDefinition
}

const MenuItem: FC<Props> = ({
  className,
  title,
  icon,
}) => {
  return (
    <div className={className + ' ' + 'menu-item'}>
      <FontAwesomeIconBtn
        className="menu-item__icon"
        icon={icon}
      />
      <p className="menu-item__title">{title}</p>
    </div>
  )
}

export default MenuItem
