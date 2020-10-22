import React, { FC } from 'react'
import PlusImage from '../atoms/svg/PlusImage'

const PostImage: FC = () => {
  const style = {
    backgroundImage:
      'url("../images/ninki_listimg_bg.png")',
  }

  return (
    <div className="post-image" style={style}>
      <div className="post-image__plus-image-wrap">
        <PlusImage
          className="post-image__plus-image"
          opacity={0.34}
        />
      </div>
    </div>
  )
}

export default PostImage
