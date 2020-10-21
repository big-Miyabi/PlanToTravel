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

const SunnyPin: FC<Props> = ({
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
        d="M19.0234 14.481C16.5415 14.481 14.5278 16.5415 14.5278 18.9766C14.5278 21.4585 16.5415 23.4722 19.0234 23.4722C21.4585 23.4722 23.519 21.4585 23.519 18.9766C23.519 16.5415 21.4585 14.481 19.0234 14.481ZM30.5434 18.2741L26.0946 16.0732L27.6868 11.3434C27.8741 10.7346 27.2654 10.1259 26.6566 10.3132L21.9268 11.9054L19.7259 7.45659C19.4449 6.8478 18.5551 6.8478 18.2741 7.45659L16.0732 11.9054L11.3434 10.3132C10.7346 10.1259 10.1259 10.7346 10.3132 11.3434L11.9054 16.0732L7.45659 18.2741C6.8478 18.5551 6.8478 19.4449 7.45659 19.7259L11.9054 21.9268L10.3132 26.6566C10.1259 27.2654 10.7346 27.8741 11.3434 27.6868L16.0732 26.0946L18.2741 30.5434C18.5551 31.1522 19.4449 31.1522 19.7259 30.5434L21.9268 26.0946L26.6566 27.6868C27.2654 27.8741 27.8741 27.2654 27.6868 26.6566L26.0946 21.9268L30.5434 19.7259C31.1522 19.4449 31.1522 18.5551 30.5434 18.2741ZM23.238 23.238C20.8966 25.5795 17.1034 25.5795 14.762 23.238C12.4205 20.8966 12.4205 17.1034 14.762 14.762C17.1034 12.4205 20.8966 12.4205 23.238 14.762C25.5795 17.1034 25.5795 20.8966 23.238 23.238Z"
        fill={colors.orange}
      />
    </svg>
  )
}

export default SunnyPin
