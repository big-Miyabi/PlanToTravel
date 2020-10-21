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

const MoonyPin: FC<Props> = ({
  className,
  gradientId,
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
        fill={'url(#' + gradientId + ')'}
      />
      <path
        d="M20.0693 31C23.1766 31 26.0086 29.4961 27.8966 26.9609C28.1719 26.5742 27.8573 26.0156 27.4246 26.1016C22.5473 27.1328 18.0633 23.0508 18.0633 17.6367C18.0633 14.543 19.558 11.707 22.036 10.1602C22.4293 9.90234 22.3113 9.30078 21.8786 9.21484C21.2886 9.08594 20.6986 9.04297 20.0693 9C14.484 9 10 13.9414 10 20C10 26.1016 14.484 31 20.0693 31Z"
        fill={colors.yellow}
      />
    </svg>
  )
}

export default MoonyPin
