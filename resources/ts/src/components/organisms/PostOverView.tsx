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
  titleInputRef: React.RefObject<HTMLInputElement>
  tagInputRef: React.RefObject<HTMLInputElement>
  dateSInputRef: React.RefObject<HTMLInputElement>
  dateFInputRef: React.RefObject<HTMLInputElement>
  peopleInputRef: React.RefObject<HTMLInputElement>
  setTitle: Dispatch<React.SetStateAction<string>>
  goToNext: () => void
  tags: string[]
  addTag: () => void
  deleteTag: (index: number) => void
  setTag: Dispatch<React.SetStateAction<string>>
  setDateS: Dispatch<React.SetStateAction<string>>
  setDateF: Dispatch<React.SetStateAction<string>>
  setPeople: Dispatch<React.SetStateAction<number>>
  isPublic: boolean
  setIsPublic: Dispatch<React.SetStateAction<boolean>>
  isBtnDisabled: boolean
  validateError: string
}

const PostOverview: FC<Props> = ({
  titleInputRef,
  tagInputRef,
  dateSInputRef,
  dateFInputRef,
  peopleInputRef,
  setTitle,
  goToNext,
  tags,
  addTag,
  deleteTag,
  setTag,
  setDateS,
  setDateF,
  setPeople,
  isPublic,
  setIsPublic,
  isBtnDisabled,
  validateError,
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
            ref={titleInputRef}
          />
          <div className="post__switch-btn-wrap">
            <FormBtn
              className={
                'post__public-switch-btn' +
                (isPublic
                  ? '--public'
                  : isBtnDisabled
                  ? '--disabled'
                  : '--private')
              }
              name={isPublic ? '公開' : '非公開'}
              onClick={() => {
                if (isBtnDisabled) return
                setIsPublic(!isPublic)
              }}
            />
          </div>
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
        <p className="post__date-notice">
          タグは最大5個までです
        </p>
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
            inputRef={dateSInputRef}
          />
          <p className="post__datebar">-</p>
          <InputBox
            type="date"
            className="post__date"
            onChange={getChangeEventFunc(setDateF)}
            inputRef={dateFInputRef}
          />
        </div>
        <p className="post__date-notice">
          期間は最長二週間までです
        </p>
      </div>

      <div className="post__content-wrap">
        <h2 className="post__h2">人数*</h2>
        <div className="post__people-input-wrap">
          <InputBox
            type="text"
            className="post__people"
            onChange={getChangeEventFunc(setPeople)}
            placeholder={'1'}
            inputRef={peopleInputRef}
          />
          <p className="post__nin">人</p>
        </div>
      </div>

      <div className="post__next-wrap">
        <FormBtn
          className={
            'post__next' + (validateError ? '--error' : '')
          }
          name="次へ"
          onClick={goToNext}
        />
      </div>
    </div>
  )
}

export default PostOverview
