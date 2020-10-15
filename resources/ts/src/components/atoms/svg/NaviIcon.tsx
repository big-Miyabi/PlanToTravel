import React, { FC } from 'react'
import { colors } from '../../../utilities/colors'

type Props = {
  className: string
  color?: string
}

const NaviIcon: FC<Props> = ({
  className,
  color = colors.yellow,
}) => {
  return (
    <svg
      className={className}
      width="23"
      height="28"
      viewBox="0 0 23 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 10L11.5 19L21 10"
        stroke={color}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default NaviIcon
