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
  setShouleShowPassword: Dispatch<
    React.SetStateAction<boolean>
  >
  shouldShowPassword: boolean
}

const FormInput: FC<Props> = ({ ...props }) => {
  const {
    className,
    inputId,
    labelName,
    placeholder,
    setValue,
    setShouleShowPassword,
    shouldShowPassword,
  } = props

  return (
    // chromeのコンソールワーニングエラーを止めるために必要
    // 参照: https://www.chromium.org/developers/design-documents/create-amazing-password-forms
    <form className={className + ' form-input'}>
      <label
        className={'form-input__label'}
        htmlFor={inputId}
      >
        {labelName}
      </label>
      {/* chromeのコンソールワーニングエラーを止めるために必要 */}
      <input type="text" autoComplete="username" hidden />
      <input
        type={shouldShowPassword ? 'text' : 'password'}
        id={inputId}
        className="form-input__input"
        placeholder={placeholder}
        autoComplete="new-password"
        onChange={(e) => setValue(e.target.value)}
      />

      <div
        className="password__icon-wrap"
        onClick={() =>
          setShouleShowPassword(!shouldShowPassword)
        }
      >
        <FontAwesomeIconBtn
          className="password__icon"
          icon={shouldShowPassword ? faEyeSlash : faEye}
        />
      </div>
    </form>
  )
}

export default FormInput
