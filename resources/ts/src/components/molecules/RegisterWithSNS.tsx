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
<<<<<<< HEAD
    <div className={className + ' ' + 'register-with-sns'}>
      <p>SNSで新規登録</p>
      <FontAwesomeIconBtn
        className="register-with-sns__icon"
        icon={faTwitter}
      />
      <FontAwesomeIconBtn
        className="register-with-sns__icon"
=======
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
>>>>>>> 6453de1... Add:register scss
        icon={faFacebook}
      />
    </div>
  )
}

export default RegisterWithSNS
