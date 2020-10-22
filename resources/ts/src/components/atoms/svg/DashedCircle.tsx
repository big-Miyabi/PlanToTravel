import React, { FC } from 'react'
import { colors } from '../../../utilities/colors'

type Props = {
  className: string
  color?: string
  onClick?: () => void
}

const DashedCircle: FC<Props> = ({
  className,
  color = colors.navyBlue,
  onClick = () => {}, // eslint-disable-line
}) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11.1429"
        cy="11.1429"
        r="10.6429"
        stroke={color}
        stroke-linejoin="round"
        stroke-dasharray="2.52 2.52"
      />
    </svg>
  )
}

export default DashedCircle
