import React, { FC, Dispatch } from 'react'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

type Props = {
  className: string
  inputId: string
  labelName: string
  placeholder: string
  setValue: Dispatch<React.SetStateAction<string>>
}

const FormInput: FC<Props> = ({ ...props }) => {
  const {
    className,
    inputId,
    labelName,
    placeholder,
    setValue,
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
        onChange={(e) => setValue(e.target.value)}
      />
      <FontAwesomeIconBtn
        className="password__icon"
        icon={faEye}
      />
    </div>
  )
}

export default FormInput
