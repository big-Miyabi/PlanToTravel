import React, { FC, Dispatch } from 'react'

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
    <div className={className + ' ' + 'form-input'}>
      <label
        className="form-input__label"
        htmlFor={inputId}
      >
        {labelName}
      </label>
      <input
        type="text"
        id={inputId}
        className="form-input__input"
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default FormInput
