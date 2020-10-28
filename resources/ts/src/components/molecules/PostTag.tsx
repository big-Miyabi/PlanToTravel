import React, { FC } from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import { getClassName } from '../../utilities/utilFunc'

type Props = {
  classNamePrefix: string
  isPost?: boolean
  tagName: string
  onClick?: () => void
}

const PostTag: FC<Props> = ({
  classNamePrefix,
  isPost = false,
  tagName,
  onClick,
}) => {
  const prefix = {
    common: 'post-tag',
    unique: classNamePrefix,
  }

  return (
    <div className={getClassName(prefix, '')}>
      <p className={getClassName(prefix, 'name')}>
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
