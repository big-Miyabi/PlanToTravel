import React, { FC } from 'react'
import IconBtn from '../atoms/IconBtn'
import {
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

type Props = {
  className: string
}

const RegisterWithSNS: FC<Props> = ({ className }) => {
  return (
    <div
      className={className + ' ' + 'register-with-sns'}
    >
      <p className="line">SNSで新規登録</p>
      <IconBtn
        className="register-with-sns__icon-twitter"
        icon={faTwitter}
      />
      <IconBtn
        className="register-with-sns__icon-facebook"
        icon={faFacebook}
      />
    </div>
  )
}

export default RegisterWithSNS
