import React, { FC, useState } from 'react'
import axios from 'axios'

const ProfEdit: FC = () => {
  return (
    <>
      <h2>プロフィール編集</h2>
      <label>
        ヘッダー画像
        <input type="text" />
      </label>
      <br />
      <label>
        ユーザ画像
        <input type="text" />
      </label>
      <br />
      <label>
        ユーザ名
        <input type="text" />
      </label>
      <br />
      <label>
        自己紹介
        <input type="text" />
      </label>
      <br />
      <button>確定</button>
    </>
  )
}

export default ProfEdit
