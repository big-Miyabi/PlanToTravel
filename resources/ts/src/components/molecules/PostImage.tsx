import React, { FC, ChangeEvent } from 'react'
import PlusImage from '../atoms/svg/PlusImage'
import PostTag from './PostTag'
import UserInfo from './UserInfo'

type Props = {
  inputRef: React.RefObject<HTMLInputElement>
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void
  src: string
  isConfirm: boolean
  icon: string
  username: string
  title: string
  dateS: string
  dateF: string
  people: number
  tags: string[]
}

const PostImage: FC<Props> = ({
  inputRef,
  onFileChange,
  src,
  isConfirm,
  icon,
  username,
  title,
  dateS,
  dateF,
  people,
  tags,
}) => {
  const style = src
    ? {
        backgroundImage: `url(${src})`,
      }
    : {
        backgroundImage:
          'url("../images/ninki_listimg_bg.png")',
      }
  const inputId = 'schedules_header_image'

  return (
    <div className="post-image" style={style}>
      {isConfirm ? (
        <div className="post-image__post-infos">
          <UserInfo
            className="post-image__user-info"
            name={username}
            iconUrl={icon}
          />
          <h1>{title}</h1>
          <p>期間: | 人数: {people}人</p>
          <div className="post-image__tags">
            {tags.map((value) => (
              <PostTag tagName={value} />
            ))}
          </div>
        </div>
      ) : (
        <label
          htmlFor={inputId}
          className="post-image__plus-image-wrap"
        >
          <PlusImage
            className="post-image__plus-image"
            opacity={0.34}
          />
          <input
            id={inputId}
            type="file"
            accept="image/jpeg"
            style={{ display: 'none' }}
            onChange={onFileChange}
            ref={inputRef}
          />
        </label>
      )}
    </div>
  )
}

export default PostImage
