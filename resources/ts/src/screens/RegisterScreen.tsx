import React, { FC } from 'react'
import FontAwesomeIconBtn from '../components/atoms/FontAwesomeIconBtn'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import RegistForm from '../containers/organisms/RegistForm'

const RegisterScreen: FC = () => {
  return (
    <div className="register">
      <FontAwesomeIconBtn
        className="register__icon"
        icon={faHome}
      />
      <div className="register__logo">
        <img
          src="../images/logo_tate_white.png"
          className="register__logo-img"
        />
      </div>
      <RegistForm />
    </div>
  )
}

export default RegisterScreen
