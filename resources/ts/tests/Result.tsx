import React, { FC, useState } from 'react'
import axios from 'axios'

const Result: FC = () => {
  return (
    <>
      <h2>検索結果をコンソール上に表示する</h2>
      <button>投稿した物の表示</button>
      <br />
      <button>いいねした物の表示</button>
      <br />
      <button>ブックマークした物の表示</button>
    </>
  )
}

export default Result
