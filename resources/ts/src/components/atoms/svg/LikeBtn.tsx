import React, { FC } from 'react'
import { colors } from '../../../utilities/colors'

type Props = {
  className: string
  isTinted: boolean
}

const LikeBtn: FC<Props> = ({ className, isTinted }) => {
  return (
    <svg
      className={className}
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="19"
        cy="19"
        r="18"
        fill="white"
        stroke={isTinted ? colors.orange : 'transparent'}
        stroke-width="2"
      />
      <path
        d="M28.4688 10.0469C25.75 7.75 21.5781 8.07812 19 10.75C16.375 8.07812 12.2031 7.75 9.48438 10.0469C5.96875 13 6.48438 17.8281 9.01562 20.4062L17.2188 28.7969C17.6875 29.2656 18.2969 29.5469 19 29.5469C19.6562 29.5469 20.2656 29.2656 20.7344 28.7969L28.9844 20.4062C31.4688 17.8281 31.9844 13 28.4688 10.0469ZM27.3438 18.8125L19.1406 27.2031C19.0469 27.2969 18.9531 27.2969 18.8125 27.2031L10.6094 18.8125C8.875 17.0781 8.54688 13.7969 10.9375 11.7812C12.7656 10.2344 15.5781 10.4688 17.3594 12.25L19 13.9375L20.6406 12.25C22.375 10.4688 25.1875 10.2344 27.0156 11.7344C29.4062 13.7969 29.0781 17.0781 27.3438 18.8125Z"
        fill={colors.orange}
      />
    </svg>
  )
}

export default LikeBtn
