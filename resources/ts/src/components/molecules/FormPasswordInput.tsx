import React, { FC } from 'react'
import IconBtn from '../atoms/IconBtn'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

type Props = {
  className: string
  inputId: string
  labelName: string
  placeholder: string
}

const FormInput: FC<Props> = ({ ...props }) => {
  const {
    className,
    inputId,
    labelName,
    placeholder,
  } = props

  return (
    <div className={className + ' form-input'}>
      <label
        className={'form-input__label'}
        htmlFor={inputId}
      >
        {labelName}
      </label>
      <input
        type="password"
        id={inputId}
        className="form-input__input"
        placeholder={placeholder}
      />
      <IconBtn
        className="password__icon"
        icon={faEye}
      />
    </div>
  )
}

export default FormInput
