import React, { FC, ChangeEvent } from 'react'
import PlusImage from '../atoms/svg/PlusImage'

type Props = {
  inputRef: React.RefObject<HTMLInputElement>
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void
  src: string
}

const PostImage: FC<Props> = ({
  inputRef,
  onFileChange,
  src,
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
    </div>
  )
}

export default PostImage
