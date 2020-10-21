import React, { FC } from 'react'
import { colors } from '../../../utilities/colors'
import { OpacityGradientType } from '../../../utilities/types'

type Props = {
  className: string
  opacityGradient?: OpacityGradientType
}

const initialOpacity: OpacityGradientType = {
  start: 1,
  end: 1,
}

const RainyPin: FC<Props> = ({
  className,
  opacityGradient = initialOpacity,
}) => {
  return (
    <svg
      className={className}
      width="39"
      height="53"
      viewBox="0 0 39 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop
            offset="0%"
            stopColor={colors.navyBlue}
            stopOpacity={opacityGradient.start}
          ></stop>
          <stop
            offset="100%"
            stopColor={colors.navyBlue}
            stopOpacity={opacityGradient.end}
          ></stop>
        </linearGradient>
      </defs>
      <path
        d="M17.4164 53C17.4164 53 -8.58891 26.4976 2.95461 7.57008C2.95461 7.57008 6.80405 0 18.3476 0C18.3476 0 33.7405 0 37.5852 15.1449C41.4298 30.2898 17.4164 53 17.4164 53Z"
        fill="url(#g1)"
      />
      <path
        d="M30.9888 20.0742C29.7725 14.2305 24.9942 10.707 19.9118 10.1484V9.375C19.9118 8.64453 19.2602 8 18.5217 8C17.7398 8 17.1316 8.64453 17.1316 9.375V10.1484C12.0058 10.707 7.2709 14.2305 6.01115 20.0742C5.92427 20.5039 6.35867 21.0195 6.8365 20.5898C9.09535 18.2266 11.4845 18.3125 13.6999 22.1797C13.9171 22.5664 14.3515 22.5234 14.5687 22.1797C15.4375 20.6328 16.5235 19 18.5217 19C21.0412 19 22.3444 21.9648 22.4313 22.1797C22.6485 22.5234 23.0828 22.5664 23.3 22.1797C25.5155 18.3125 27.9481 18.2266 30.2069 20.5898C30.6413 21.0195 31.0757 20.5039 30.9888 20.0742ZM17.1316 20.9766V26.5625C17.1316 26.9492 16.7841 27.25 16.4366 27.25C16.0891 27.25 15.8285 27.0352 15.7416 26.8203C15.5244 26.0898 14.699 25.7031 14.004 25.9609C13.2655 26.2188 12.8746 26.9922 13.1352 27.7227C13.6131 29.0977 14.9597 30 16.4366 30C18.3479 30 19.9118 28.4531 19.9118 26.5625V20.9766C19.4774 20.6328 19.043 20.375 18.5217 20.375C17.957 20.418 17.5226 20.5898 17.1316 20.9766Z"
        fill={colors.lightBlue}
      />
    </svg>
  )
}

export default RainyPin
