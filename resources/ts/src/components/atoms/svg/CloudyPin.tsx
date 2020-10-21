import React, { FC } from 'react'
import { colors } from '../../../utilities/colors'
import { OpacityGradientType } from '../../../utilities/types'

type Props = {
  className: string
  gradientId?: string
  opacityGradient?: OpacityGradientType
}

const initialOpacity: OpacityGradientType = {
  start: 1,
  end: 1,
}

const CloudyPin: FC<Props> = ({
  className,
  gradientId,
  opacityGradient = initialOpacity,
}) => {
  const bgFill = gradientId
    ? 'url(#' + gradientId + ')'
    : colors.navyBlue

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
        <linearGradient
          id={gradientId}
          x1="0"
          x2="0"
          y1="0"
          y2="1"
        >
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
        fill={bgFill}
      />
      <path
        d="M27.1375 16.3996C27.2875 15.9821 27.4 15.5647 27.4 15.0714C27.4 13.0603 25.7875 11.4286 23.8 11.4286C23.05 11.4286 22.3375 11.6562 21.775 12.0737C20.7625 10.2522 18.8125 9 16.6 9C13.2625 9 10.6 11.7321 10.6 15.0714C10.6 15.1853 10.6 15.2991 10.6 15.4129C8.5 16.1339 7 18.183 7 20.5357C7 23.5714 9.4 26 12.4 26H26.2C28.825 26 31 23.8371 31 21.1429C31 18.8281 29.35 16.8549 27.1375 16.3996Z"
        fill={colors.gray}
      />
    </svg>
  )
}

export default CloudyPin
