import React, { FC } from 'react'
import { colors } from '../../../utilities/colors'

type Props = {
  className: string
  onClick?: () => void
}

const BadFace: FC<Props> = ({
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
        d="M6.45386 15.9329C8.19625 15.6285 12.5112 15.2023 15.832 15.9329"
        stroke={colors.navyBlue}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
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
      <rect
        x="5"
        y="5.77649"
        width="3"
        height="1.73287"
        transform="rotate(-15 5 5.77649)"
        fill={colors.faceColor}
      />
      <rect
        width="3"
        height="1.73287"
        transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 17.3462 5.77649)"
        fill={colors.faceColor}
      />
    </svg>
  )
}

export default BadFace
