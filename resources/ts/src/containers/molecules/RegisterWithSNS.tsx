import React, { FC } from "react"
import RegisterWithSNS from "../../components/molecules/RegisterWithSNS"

type Props = {
  className: string;
}


const RegisterWithSNSContainer: FC<Props> = ({className}) => {
  return (
    <RegisterWithSNS className={className} />
  )
}

export default RegisterWithSNSContainer;
