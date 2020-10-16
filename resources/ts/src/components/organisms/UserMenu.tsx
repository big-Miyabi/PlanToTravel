import React, { FC, Dispatch } from 'react'
import {
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import FormInput from '../molecules/FormInput'
import FormPasswordInput from '../molecules/FormPasswordInput'
import FormBtn from '../atoms/FormBtn'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'

type Props = {
  isLogin: boolean
  setMail: Dispatch<React.SetStateAction<string>>
  setPassword: Dispatch<React.SetStateAction<string>>
}

const UserMenu: FC<Props> = ({
  isLogin,
  setMail,
  setPassword,
}) => {
  return (
    <>
      {isLogin ? (
        <div className="user-menu--profile">
          <FontAwesomeIconBtn
            className="user-menu--user-icon"
            icon={faUserCircle}
          />
        </div>
      ) : (
        <div className="user-menu--login">
          <FormInput
            className="user-manu__mail-input"
            inputId="mail"
            labelName="メールアドレス"
            placeholder="メールアドレスを入力"
            setValue={setMail}
          />
          <FormPasswordInput
            className="user-manu__password-input"
            inputId="password"
            labelName="パスワード"
            placeholder="6文字以上半角英数字"
            setValue={setPassword}
          />

          <p className="user-menu__forgetting-password">
            パスワードをお忘れですか？
          </p>

          <div className="login">
            <FormBtn
              className="login__button"
              name="ログイン"
              onClick={() => {}}
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
            <span className="policy__terms">利用規約</span>
            ・
            <span className="policy__privacy-policy">
              プライバシーポリシー
            </span>
          </p>
        </div>
      )}
    </>
  )
}

export default UserMenu
