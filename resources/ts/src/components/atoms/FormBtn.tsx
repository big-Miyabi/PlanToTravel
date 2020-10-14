import React, { FC } from "react"

type Props = {
  className: string;
  name: string;
}

const FormBtn: FC<Props> = ({className, name}) => {
  return (
    <button className={className + " form-btn"}>
      {name}
    </button>
  )
}

export default FormBtn;
