import React, { FC } from 'react'

type Props = {
  className: string
  name: string
  onClick: () => void
  isDisabled?: boolean
}

const FormBtn: FC<Props> = ({
  className,
  name,
  onClick,
  isDisabled = false,
}) => {
  return (
    <button
      className={className + ' form-btn'}
      onClick={onClick}
      disabled={isDisabled}
    >
      {name}
    </button>
  )
}

export default FormBtn
