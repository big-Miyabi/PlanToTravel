import React, { FC, Dispatch, useState } from 'react'
import FormPasswordInput from '../../components/molecules/FormPasswordInput'

type Props = {
  className: string
  inputId: string
  labelName: string
  placeholder: string
  setValue: Dispatch<React.SetStateAction<string>>
}

const FormPasswordInputContainer: FC<Props> = ({
  ...props
}) => {
  const {
    className,
    inputId,
    labelName,
    placeholder,
    setValue,
  } = props
  const [
    shouldShowPassword,
    setShouleShowPassword,
  ] = useState(false)

  return (
    <FormPasswordInput
      className={className}
      inputId={inputId}
      labelName={labelName}
      placeholder={placeholder}
      setValue={setValue}
      setShouleShowPassword={setShouleShowPassword}
      shouldShowPassword={shouldShowPassword}
    />
  )
}

export default FormPasswordInputContainer
