import React, { FC, ChangeEvent } from 'react'

type Props = {
  type: string
  className: string // BEM設計におけるmodifier部分
  placeholder?: string | undefined
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputBox: FC<Props> = ({
  type,
  className,
  placeholder = undefined,
  onChange = () => {}, // eslint-disable-line
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
