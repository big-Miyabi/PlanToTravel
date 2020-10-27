import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { setImageSrc } from '../../actions/post'
import PostImage from '../../components/molecules/PostImage'
import { useFileInput } from '../../utilities/customHook'

const PostImageContainer: FC = () => {
  const dispatch = useDispatch()
  const [inputRef, src, onFileChange] = useFileInput(
    undefined,
    (src) => {
      dispatch(setImageSrc(src))
    }
  )

  return (
    <PostImage
      inputRef={inputRef}
      src={src}
      onFileChange={onFileChange}
    />
  )
}

export default PostImageContainer
