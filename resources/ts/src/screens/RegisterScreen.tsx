import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { RouteComponentProps as Props } from 'react-router-dom'
import FontAwesomeIconBtn from '../components/atoms/FontAwesomeIconBtn'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import RegistForm from '../containers/organisms/RegistForm'

const RegisterScreen: FC<Props> = (props) => {
  return (
    <div className="register">
      <Link to="../home">
        <FontAwesomeIconBtn
          className="register__home-icon"
          icon={faHome}
        />
      </Link>
      <div className="register__content">
        <div className="register__logo">
          <Link to="../home">
            <img
              src="../images/logo_tate_white.png"
              className="register__logo-img"
            />
          </Link>
        </div>
        <RegistForm history={props.history} />
      </div>
    </div>
  )
}

export default RegisterScreen
