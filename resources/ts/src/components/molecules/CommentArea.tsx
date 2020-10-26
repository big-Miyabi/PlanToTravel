import React, { FC, ChangeEvent } from 'react'
import EditIcon from '../atoms/svg/EditIcon'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

type Props = {
  maxLength: number
  length: number
  onClick?: () => void
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const CommentArea: FC<Props> = ({
  maxLength,
  length,
  onChange,
}) => {
  const overClass = length >= maxLength ? '--over' : ''

  return (
    <div className="comment-area">
      <div className="comment-area__header">
        <p className="comment-area__title">
          <EditIcon className="comment-area__edit-icon" />
          コメント
        </p>
        <FontAwesomeIconBtn
          className="comment-area__plus"
          icon={faPlus}
        />
      </div>
      <textarea
        className="comment-area__textarea"
        maxLength={maxLength}
        onChange={onChange}
      />
      <p className={'comment-area__progress' + overClass}>
        {length} / {maxLength}
      </p>
    </div>
  )
}

export default CommentArea
