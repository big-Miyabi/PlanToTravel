import React, { FC } from 'react'
import { colors } from '../../../utilities/colors'

type Props = {
  className: string
  color?: string
  onClick: () => void
}

const SearchIcon: FC<Props> = ({
  className,
  color = colors.yellow,
  onClick,
}) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="22"
      height="25"
      viewBox="0 0 22 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6992 20.7852L17.4023 16.4883C17.1875 16.3164 16.9297 16.1875 16.6719 16.1875H15.9844C17.1445 14.6836 17.875 12.793 17.875 10.6875C17.875 5.78906 13.8359 1.75 8.9375 1.75C3.99609 1.75 0 5.78906 0 10.6875C0 15.6289 3.99609 19.625 8.9375 19.625C11 19.625 12.8906 18.9375 14.4375 17.7344V18.4648C14.4375 18.7227 14.5234 18.9805 14.7383 19.1953L18.9922 23.4492C19.4219 23.8789 20.0664 23.8789 20.4531 23.4492L21.6562 22.2461C22.0859 21.8594 22.0859 21.2148 21.6992 20.7852ZM8.9375 16.1875C5.88672 16.1875 3.4375 13.7383 3.4375 10.6875C3.4375 7.67969 5.88672 5.1875 8.9375 5.1875C11.9453 5.1875 14.4375 7.67969 14.4375 10.6875C14.4375 13.7383 11.9453 16.1875 8.9375 16.1875Z"
        fill={color}
      />
    </svg>
  )
}

export default SearchIcon
