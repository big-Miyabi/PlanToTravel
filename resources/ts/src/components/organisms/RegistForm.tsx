import React, { FC, Dispatch } from 'react'
import FormInput from '../molecules/FormInput'
import FormPasswordInput from '../../containers/molecules/FormPasswordInput'
import FormBtn from '../atoms/FormBtn'
import RegisterWithSNS from '../../containers/molecules/RegisterWithSNS'

type Props = {
  setUserName: Dispatch<React.SetStateAction<string>>
  setMail: Dispatch<React.SetStateAction<string>>
  setPassword: Dispatch<React.SetStateAction<string>>
  regist: () => void
}

const RegistForm: FC<Props> = ({
  setUserName,
  setMail,
  setPassword,
  regist,
}) => {
  return (
    <div className="regist-form">
      <FormInput
        className="regist-form__username"
        inputId="username"
        labelName="ユーザーネーム"
        placeholder="2-15文字以内"
        setValue={setUserName}
      />

      <FormInput
        className="regist-form__mail"
        inputId="mail"
        labelName="メールアドレス"
        placeholder="メールアドレスを入力"
        setValue={setMail}
      />

      <FormPasswordInput
        className="regist-form__password"
        inputId="password"
        labelName="パスワード"
        placeholder="6文字以上半角英数字"
        setValue={setPassword}
      />

      <FormBtn
        className="regist-form__button"
        name="新規登録"
        onClick={() => regist()}
      />

      <RegisterWithSNS className="regist-form__sns" />

      <div className="confirm-msg">
        {/* 利用規約とプライバシーポリシー部分は、後々Linkコンポーネントで囲んで画面遷移できるようにする */}
        <p>
          登録することで、
          <span className="confirm-msg__link">
            利用規約
          </span>
          及び
          <br />
          <span className="confirm-msg__link">
            プライバシーポリシー
          </span>
          に同意するものとします。
        </p>
      </div>
    </div>
  )
}

export default RegistForm
