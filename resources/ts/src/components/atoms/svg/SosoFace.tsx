import React, { FC } from 'react'
import { colors } from '../../../utilities/colors'

type Props = {
  className: string
  onClick?: () => void
}

const SosoFace: FC<Props> = ({
  className,
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
        r="11.1429"
        fill={colors.faceColor}
      />
      <path
        d="M6.55469 15.9329C8.26897 16.6556 12.5144 17.6673 15.7816 15.9329"
        stroke={colors.navyBlue}
        stroke-width="0.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <ellipse
        cx="7.15967"
        cy="8.1428"
        rx="1.15966"
        ry="2.1428"
        fill={colors.navyBlue}
      />
      <ellipse
        cx="15.2268"
        cy="8.1428"
        rx="1.15966"
        ry="2.1428"
        fill={colors.navyBlue}
      />
    </svg>
  )
}

export default SosoFace
