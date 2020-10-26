import React, { FC } from 'react'
import { colors } from '../../../utilities/colors'

type Props = {
  className: string
  onClick?: () => void
}

const GoodFace: FC<Props> = ({
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
        d="M14.3634 6.29251C14.9551 6.51508 15.1906 7.08351 15.2344 7.3399C15.5522 6.9144 16.4071 6.08649 17.108 6.50526C18.0119 7.04532 17.5846 8.17454 17.223 8.55095C16.9338 8.85208 15.8151 9.89292 15.2344 10.2857C15.0865 10.2748 14.5376 9.94856 13.5253 8.73097C12.2598 7.20898 13.6239 6.0143 14.3634 6.29251Z"
        fill={colors.navyBlue}
        stroke={colors.navyBlue}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.09462 6.29263C6.68626 6.5152 6.92182 7.08363 6.96565 7.34003C7.28338 6.91452 8.13828 6.08661 8.83917 6.50538C9.74307 7.04544 9.31577 8.17466 8.95421 8.55107C8.66497 8.8522 7.54633 9.89304 6.96565 10.2858C6.81774 10.2749 6.26883 9.94869 5.25647 8.73109C3.99102 7.2091 5.35508 6.01442 6.09462 6.29263Z"
        fill={colors.navyBlue}
        stroke={colors.navyBlue}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.87762 15.4708C6.63925 15.6508 7.68394 15.8203 8.83332 15.8903M8.83332 15.8903C11.4752 16.0513 14.6702 15.6866 16.2521 13.7151C16.4746 15.2743 16.1803 18.5135 13.2235 18.9972C10.2667 19.4808 9.0647 17.1275 8.83332 15.8903Z"
        stroke={colors.navyBlue}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7367 16.9901C11.105 16.3912 9.83598 17.7887 10.0173 18.1881L10.5 18.5L11.6489 18.787C11.8302 18.787 12.5191 19.2662 13.8244 18.787C15.1298 18.3079 15.8187 16.7905 16 16.3912C16 16.3912 14.3684 15.1932 12.7367 16.9901Z"
        fill={colors.navyBlue}
      />
    </svg>
  )
}

export default GoodFace
