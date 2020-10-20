import React, { FC } from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'

type Props = {
  isPost?: boolean
  tagName: string
  onClick: () => void
}

const PostTag: FC<Props> = ({
  isPost = false,
  tagName,
  onClick,
}) => {
  return (
    <div className="post-tag">
      <p
        className={
          isPost ? 'post-tag__name--post' : 'post-tag__name'
        }
      >
        {tagName}
      </p>
      {isPost ? (
        <FontAwesomeIconBtn
          className="post-tag__delete"
          onClick={onClick}
          icon={faTimes}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default PostTag
