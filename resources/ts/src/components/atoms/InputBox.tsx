import React, { FC } from 'react'

type Props = {
  type: string
  className: string // BEM設計におけるmodifier部分
  placeholder?: string | undefined
  onChange?: () => void
}

const InputBox: FC<Props> = ({
  type,
  className,
  placeholder = undefined,
  onChange = () => {},
}) => {
  return (
    <input
      type={type}
      className={className + ' ' + 'input-box'}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default InputBox
