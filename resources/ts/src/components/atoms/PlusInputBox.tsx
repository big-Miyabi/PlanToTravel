import React, {
  FC,
  ChangeEvent,
  KeyboardEvent,
  FocusEvent,
} from 'react'
import FontAwesomeIconBtn from './FontAwesomeIconBtn'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import InputBox from './InputBox'

type Props = {
  type: string
  className: string // BEM設計におけるmodifier部分
  placeholder?: string | undefined
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onClick?: () => void
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  inputRef?: React.RefObject<HTMLInputElement>
  maxLength?: number
  modifier?: '--light-blue' | '--light-navy'
}

const PlusInputBox: FC<Props> = ({
  type,
  className,
  placeholder = undefined,
  onChange,
  onClick,
  onKeyPress,
  onFocus,
  onBlur,
  inputRef,
  maxLength,
  modifier = '',
}) => {
  return (
    <div className={className + ' ' + 'plus-input-box'}>
      <InputBox
        type={type}
        className={'plus-input-box__input' + modifier}
        placeholder={placeholder}
        onChange={onChange}
        onKeyPress={onKeyPress}
        onFocus={onFocus}
        onBlur={onBlur}
        inputRef={inputRef}
        maxLength={maxLength}
      />
      <FontAwesomeIconBtn
        onClick={onClick}
        className={'plus-input-box__plus' + modifier}
        icon={faPlus}
      />
    </div>
  )
}

export default PlusInputBox
