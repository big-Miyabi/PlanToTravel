import React, { FC, Dispatch } from 'react'
import {
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faHeart,
  faBookmark,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'
import FormInput from '../molecules/FormInput'
import FormPasswordInput from '../molecules/FormPasswordInput'
import FormBtn from '../atoms/FormBtn'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import UserInfo from '../molecules/UserInfo'
import MenuItem from '../molecules/MenuItem'

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
          <UserInfo
            className="user-menu__user-info"
            iconUrl=""
            name="unknown"
          />
          <div className="user-menu__items">
            <MenuItem
              className="user_menu__home"
              title={'Home'}
              icon={faHome}
            />
            <MenuItem
              className="user_menu__itinerary"
              title={'作成した行程表'}
              icon={'MapIcon'}
            />
            <MenuItem
              className="user_menu__favorite"
              title={'いいね'}
              icon={faHeart}
            />
            <MenuItem
              className="user_menu__bookmark"
              title={'ブックマーク'}
              icon={faBookmark}
            />
            <MenuItem
              className="user_menu__setting"
              title={'設定'}
              icon={faCog}
            />
            <MenuItem
              className="user_menu__logout"
              title={'ログアウト'}
              icon={faSignOutAlt}
            />
          </div>
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
