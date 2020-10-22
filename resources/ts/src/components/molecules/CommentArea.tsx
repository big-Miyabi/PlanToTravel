import React, { FC } from 'react'
import { colors } from '../../utilities/colors'
import EditIcon from '../atoms/svg/EditIcon'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

type Props = {
  maxLength: number
  onClick?: () => void
}

const CommentArea: FC<Props> = ({
  maxLength,
  onClick = () => {}, // eslint-disable-line
}) => {
  return (
    <div className="comment-area">
      <div className="coment-area__header">
        <p className="comment-area__p">
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
      />
    </div>
  )
}

export default CommentArea
