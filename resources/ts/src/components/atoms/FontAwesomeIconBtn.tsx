import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

type Props = {
  icon: IconDefinition
  className: string
  onClick?: () => void
}

const FontAwesomeIconBtn: FC<Props> = ({
  icon,
  className,
  onClick,
}) => {
  return (
    <FontAwesomeIcon
      onClick={onClick}
      className={className}
      icon={icon}
    />
  )
}

export default FontAwesomeIconBtn
