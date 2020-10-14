import React, { FC } from 'react'
import FormInput from '../molecules/FormInput'
import FormPasswordInput from '../molecules/FormPasswordInput'
import FormBtn from '../atoms/FormBtn'
import RegisterWithSNS from '../../containers/molecules/RegisterWithSNS'

const RegistForm: FC = () => {
  return (
    <div className="regist-form">
      <FormInput
        className="regist-form__input"
        inputId="username"
        labelName="ユーザーネーム"
        placeholder="2-15文字以内"
      />

      <FormInput
        className="regist-form__input"
        inputId="mail"
        labelName="メールアドレス"
        placeholder="メールアドレスを入力"
      />

      <FormPasswordInput
        className="regist-form__password"
        inputId="password"
        labelName="パスワード"
        placeholder="6文字以上半角英数字"
      />

      <FormBtn
        className="regist-form__button"
        name="新規登録"
      />

      <RegisterWithSNS className="regist-form__sns" />

      <div className="regist-form__confirm-msg">
        <p>
          登録することで、利用規約及びプライバシーポリシーに同意するものとします。
        </p>
      </div>
    </div>
  )
}

export default RegistForm
