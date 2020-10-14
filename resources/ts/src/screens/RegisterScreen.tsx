import React, { FC } from "react"
import IconBtn from "../components/atoms/IconBtn"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import RegistForm from "../containers/organisms/RegistForm"

const RegisterScreen: FC = () => {
  return (
    <div className="register">
      <IconBtn className="register__icon" icon={faHome} />
      <img src="../images/logo_tate_white.png" className="register__logo" />
      <RegistForm />
    </div>
  )
}

export default RegisterScreen
