import React, {
  FC,
  ChangeEvent,
  KeyboardEvent,
  FocusEvent,
} from 'react'

type Props = {
  type: string
  className: string // BEM設計におけるmodifier部分
  placeholder?: string | undefined
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  inputRef?: React.RefObject<HTMLInputElement>
  maxLength?: number
}

const InputBox: FC<Props> = ({
  type,
  className,
  placeholder = undefined,
  onChange,
  onKeyPress,
  onFocus,
  onBlur,
  inputRef = null,
  maxLength,
}) => {
  return (
    <input
      type={type}
      className={className + ' ' + 'input-box'}
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={onChange}
      onKeyPress={onKeyPress}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={inputRef}
    />
  )
}

export default InputBox
