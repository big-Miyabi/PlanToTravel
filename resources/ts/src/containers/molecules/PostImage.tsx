import React, { FC } from 'react'
import PostImage from '../../components/molecules/PostImage'
import { useFileInput } from '../../utilities/customHook'

const PostImageContainer: FC = () => {
  const [inputRef, src, onFileChange] = useFileInput()

  return (
    <PostImage
      inputRef={inputRef}
      src={src}
      onFileChange={onFileChange}
    />
  )
}

export default PostImageContainer
