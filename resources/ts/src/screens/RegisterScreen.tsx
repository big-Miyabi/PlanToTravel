import React, { FC } from "react"

import IconBtn from "../components/atoms/IconBtn"
import { faHome } from "@fortawesome/free-solid-svg-icons";

const RegisterScreen: FC = () => {
  return (
    <div className="register">
      <IconBtn className="register__icon" icon={faHome} />
      {/* <RegistForm /> */}
    </div>
  )
}

export default RegisterScreen
