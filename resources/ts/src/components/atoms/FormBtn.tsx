import React, { FC } from 'react'

type Props = {
  className: string
  name: string
  onClick: () => void
}

const FormBtn: FC<Props> = ({
  className,
  name,
  onClick,
}) => {
  return (
    <button
      className={className + ' form-btn'}
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default FormBtn
