import React, { FC } from "react"
import IconBtn from "../atoms/IconBtn"
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"

type Props = {
  className: string;
}


const RegisterWithSNS: FC<Props> = ({className}) => {

  return (
    <div className={className}>
      <p>SNSで新規登録</p>
      <IconBtn className="register__icon" icon={faTwitter} />
      <IconBtn className="register__icon" icon={faFacebook} />
    </div>
  )
}

export default RegisterWithSNS;
