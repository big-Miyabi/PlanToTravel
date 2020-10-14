import React, { FC } from "react"

type Props = {
  className: string;
  inputId: string;
  labelName: string;
  placeholder: string;
}

const FormInput:FC<Props> = ({...props}) => {
  const { className, inputId, labelName, placeholder } = props;

  return (
    <div className={className + " " + "form-input"}>
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
      />
    </div>
  )
}

export default FormInput;
