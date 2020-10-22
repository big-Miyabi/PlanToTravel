import React, { FC } from 'react'
import FontAwesomeIconBtn from './FontAwesomeIconBtn'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import InputBox from './InputBox'

type Props = {
  type: string
  className: string // BEM設計におけるmodifier部分
  placeholder?: string | undefined
  onChange?: () => void
  onClick?: () => void
}

const PlusInputBox: FC<Props> = ({
  type,
  className,
  placeholder = undefined,
  onChange = () => {}, // eslint-disable-line
  onClick = () => {}, // eslint-disable-line
}) => {
  return (
    <div className={className + ' ' + 'plus-input-box'}>
      <InputBox
        type={type}
        className={'plus-input-box__input'}
        placeholder={placeholder}
        onChange={onChange}
      />
      <FontAwesomeIconBtn
        onClick={onClick}
        className="plus-input-box__plus"
        icon={faPlus}
      />
    </div>
  )
}

export default PlusInputBox
