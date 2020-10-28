import React, { FC, Dispatch } from 'react'
import {
  getChangeEventFunc,
  getKeyboardEventFunc,
} from '../../utilities/getEventFunc'
import PostTag from '../molecules/PostTag'
import InputBox from '../atoms/InputBox'
import PlusInputBox from '../atoms/PlusInputBox'
import FormBtn from '../atoms/FormBtn'

type Props = {
  setTitle: Dispatch<React.SetStateAction<string>>
  goToNext: () => void
  tags: string[]
  addTag: () => void
  deleteTag: (index: number) => void
  setTag: Dispatch<React.SetStateAction<string>>
  tagInputRef: React.RefObject<HTMLInputElement>
  setDateS: Dispatch<React.SetStateAction<string>>
  setDateF: Dispatch<React.SetStateAction<string>>
  setPeople: Dispatch<React.SetStateAction<number>>
}

const PostOverview: FC<Props> = ({
  setTitle,
  goToNext,
  tags,
  addTag,
  deleteTag,
  setTag,
  tagInputRef,
  setDateS,
  setDateF,
  setPeople,
}) => {
  return (
    <div className="post">
      <div className="post__content-wrap">
        <h2 className="post__h2">タイトル*</h2>
        <div className="post__row-flex-wrap">
          <input
            type="text"
            className="post__title"
            onChange={getChangeEventFunc(setTitle)}
          />
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
            maxLength={12}
            onChange={getChangeEventFunc(setTag)}
            onKeyPress={getKeyboardEventFunc(addTag)}
            onClick={addTag}
            inputRef={tagInputRef}
          />
        </div>
        <div className="post__tag-wrap">
          {tags.map((value, index) => (
            <PostTag
              classNamePrefix="post-overview-tag"
              tagName={value}
              isPost={true}
              onClick={() => {
                deleteTag(index)
              }}
              key={index}
            />
          ))}
        </div>
      </div>

      <div className="post__content-wrap">
        <h2 className="post__h2">日付*</h2>
        <div className="post__date-wrap">
          <InputBox
            type="date"
            className="post__date"
            onChange={getChangeEventFunc(setDateS)}
          />
          <p className="post__datebar">-</p>
          <InputBox
            type="date"
            className="post__date"
            onChange={getChangeEventFunc(setDateF)}
          />
        </div>
      </div>

      <div className="post__content-wrap">
        <h2 className="post__h2">人数*</h2>
        <div className="post__people-input-wrap">
          <InputBox
            type="text"
            className="post__people"
            onChange={getChangeEventFunc(setPeople)}
          />
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
