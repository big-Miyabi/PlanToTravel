import React, { FC } from 'react'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import {
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

type Props = {
  className: string
}

const RegisterWithSNS: FC<Props> = ({ className }) => {
  return (
    <div className={className + ' ' + 'register-with-sns'}>
      <p className="register-with-sns__p">SNSで新規登録</p>
      <FontAwesomeIconBtn
        className="register-with-sns__icon-twitter"
        icon={faTwitter}
      />
      <FontAwesomeIconBtn
        className="register-with-sns__icon-facebook"
        icon={faFacebook}
      />
    </div>
  )
}

export default RegisterWithSNS
