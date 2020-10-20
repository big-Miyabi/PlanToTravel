import React, { FC } from 'react'
import PostTag from '../molecules/PostTag'
import InputBox from '../atoms/InputBox'
import FormBtn from '../atoms/FormBtn'

const PostOverview: FC = () => {
  return (
    <div className="post-overview">
      <div className="post-overview__content-wrap">
        <h2 className="post-overview__h2">タイトル*</h2>
        <input
          type="text"
          className="post-overview__title"
        />
        <button className="post-overview__public-switch-btn">
          非公開
        </button>
      </div>

      <div className="post-overview__content-wrap">
        <h2 className="post-overview__h2">タグ</h2>
        <InputBox
          type="text"
          className="post-overview__tag"
          placeholder="タグを追加してください"
        />
        <PostTag tagName="hoge" onClick={() => {}} />
      </div>

      <div className="post-overview__content-wrap">
        <h2 className="post-overview__h2">日付*</h2>
        <div className="post-overview__date-wrap">
          <InputBox
            type="date"
            className="post-overview__date"
          />
          <p>-</p>
          <InputBox
            type="date"
            className="post-overview__date"
          />
        </div>
      </div>

      <div className="post-overview__content-wrap">
        <h2 className="post-overview__h2">人数*</h2>
        <div className="post-overview__people-input-wrap">
          <InputBox
            type="text"
            className="post-overview__people"
          />
          <p>人</p>
        </div>
      </div>

      <FormBtn
        className="post-overview__next"
        name="次へ"
        onClick={() => {}}
      />
    </div>
  )
}

export default PostOverview
