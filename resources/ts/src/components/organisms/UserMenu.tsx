import React, { FC } from 'react'
import {
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import FormInput from '../molecules/FormInput'
import FormPasswordInput from '../molecules/FormPasswordInput'
import FormBtn from '../atoms/FormBtn'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'

const UserMenu: FC = () => {
  return (
    <div className="user-menu">
      <FormInput
        className="user-manu__mail-input"
        inputId="mail"
        labelName="メールアドレス"
        placeholder="メールアドレスを入力"
      />
      <FormPasswordInput
        className="user-manu__password-input"
        inputId="password"
        labelName="パスワード"
        placeholder="6文字以上半角英数字"
      />

      <p className="user-menu__forgetting-password">
        パスワードをお忘れですか？
      </p>

      <div className="login">
        <FormBtn
          className="login__button"
          name="ログイン"
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

      <p className="user-menu__register-btn">
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

export default UserMenu
