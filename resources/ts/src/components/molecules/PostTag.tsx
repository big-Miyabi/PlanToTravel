import React, { FC } from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'

type Props = {
  tagName: string
  onClick: () => void
}

const PostTag: FC<Props> = ({ tagName, onClick }) => {
  return (
    <div className="post-tag">
      <p className="post-tag__name">{tagName}</p>
      <FontAwesomeIconBtn
        className="post-tag__delete"
        onClick={onClick}
        icon={faTimes}
      />
    </div>
  )
}

export default PostTag
