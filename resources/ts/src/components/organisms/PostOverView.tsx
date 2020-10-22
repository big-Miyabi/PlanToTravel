import React, { FC, Dispatch, ChangeEvent } from 'react'
import { getChangeEventFunc } from '../../utilities/getEventFunc'
import PostTag from '../molecules/PostTag'
import InputBox from '../atoms/InputBox'
import PlusInputBox from '../atoms/PlusInputBox'
import FormBtn from '../atoms/FormBtn'

type Props = {
  goToNext: () => void
  tags: string[]
  addTag: (tag: string) => void
  setTag: Dispatch<React.SetStateAction<string>>
  setDateS: Dispatch<React.SetStateAction<string>>
  setDateF: Dispatch<React.SetStateAction<string>>
  setPeople: Dispatch<React.SetStateAction<number>>
}

const PostOverview: FC<Props> = ({
  goToNext,
  tags,
  addTag,
  setTag,
  setDateS,
  setDateF,
  setPeople,
}) => {
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
            onChange={getChangeEventFunc(setTag)}
          />
        </div>
        <div className="post__tag-wrap">
          {tags.map((value, index) => (
            <PostTag
              tagName={value}
              isPost={true}
              onClick={() => {}}
            />
          ))}
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
