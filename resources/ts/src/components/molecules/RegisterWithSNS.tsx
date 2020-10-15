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
      <p>SNSで新規登録</p>
      <FontAwesomeIconBtn
        className="register-with-sns__icon"
        icon={faTwitter}
      />
      <FontAwesomeIconBtn
        className="register-with-sns__icon"
        icon={faFacebook}
      />
    </div>
  )
}

export default RegisterWithSNS
