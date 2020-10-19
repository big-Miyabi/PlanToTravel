import React, { FC, Dispatch } from 'react'
import {
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import FormInput from '../molecules/FormInput'
import FormPasswordInput from '../../containers/molecules/FormPasswordInput'
import FormBtn from '../atoms/FormBtn'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'

type Props = {
  className: string
  setMail: Dispatch<React.SetStateAction<string>>
  setPassword: Dispatch<React.SetStateAction<string>>
  login: () => void
}

const LoginMenu: FC<Props> = ({
  className,
  setMail,
  setPassword,
  login,
}) => {
  return (
    //ここからログイン
    <div className={className + ' ' + 'login-menu'}>
      <FormInput
        className="login-menu__mail-input"
        inputId="mail"
        labelName="メールアドレス"
        placeholder="メールアドレスを入力"
        setValue={setMail}
      />
      <FormPasswordInput
        className="login-menu__password-input"
        inputId="password"
        labelName="パスワード"
        placeholder="6文字以上半角英数字"
        setValue={setPassword}
      />

      <p className="login-menu__forgetting-password">
        パスワードをお忘れですか？
      </p>

      <div className="login">
        <FormBtn
          className="login__button"
          name="ログイン"
          onClick={() => login()}
        />
        <FontAwesomeIconBtn
          className="login__twitter-icon"
          icon={faTwitter}
        />
        <FontAwesomeIconBtn
          className="login__facebook-icon"
          icon={faFacebook}
        />
      </div>

      <p className="login-menu__register-btn">
        アカウントをお持ちでない方はこちら
      </p>

      <p className="policy">
        <span className="policy__terms">利用規約</span>・
        <span className="policy__privacy-policy">
          プライバシーポリシー
        </span>
      </p>
    </div>
  )
}

export default LoginMenu
