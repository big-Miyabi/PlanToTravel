import React, { FC } from 'react'
import PostTag from '../molecules/PostTag'
import InputBox from '../atoms/InputBox'
import PlusInputBox from '../atoms/PlusInputBox'
import FormBtn from '../atoms/FormBtn'

type Props = {
  goToNext: () => void
}

const PostOverview: FC<Props> = ({ goToNext }) => {
  return (
    <div className="post">
      <div className="post__content-wrap">
        <h2 className="post__h2">タイトル*</h2>
        <div className="post__row-flex-wrap">
          <input type="text" className="post__title" />
          <FormBtn
            className="post__public-switch-btn"
            name="非公開"
            onClick={() => {}}
          />
        </div>
      </div>

      <div className="post__content-wrap">
        <div className="post__row-flex-wrap">
          <h2 className="post__h2">タグ</h2>
          <PlusInputBox
            type="text"
            className="post__tag-input"
            placeholder="タグを追加してください"
          />
        </div>
        <div className="post__tag-wrap">
          <PostTag
            tagName="hoge"
            isPost={true}
            onClick={() => {}}
          />
          <PostTag
            tagName="hoooge"
            isPost={true}
            onClick={() => {}}
          />
          <PostTag
            tagName="hogeeeddddddddddddddee"
            isPost={true}
            onClick={() => {}}
          />
          <PostTag
            tagName="hoge"
            isPost={true}
            onClick={() => {}}
          />
          <PostTag
            tagName="hoge33333"
            isPost={true}
            onClick={() => {}}
          />
          <PostTag
            tagName="hogeeeee1234"
            isPost={true}
            onClick={() => {}}
          />
        </div>
      </div>

      <div className="post__content-wrap">
        <h2 className="post__h2">日付*</h2>
        <div className="post__date-wrap">
          <InputBox type="date" className="post__date" />
          <p className="post__datebar">-</p>
          <InputBox type="date" className="post__date" />
        </div>
      </div>

      <div className="post__content-wrap">
        <h2 className="post__h2">人数*</h2>
        <div className="post__people-input-wrap">
          <InputBox type="text" className="post__people" />
          <p className="post__nin">人</p>
        </div>
      </div>

      <div className="post__next-wrap">
        <FormBtn
          className="post__next"
          name="次へ"
          onClick={goToNext}
        />
      </div>
    </div>
  )
}

export default PostOverview
