import React, { FC } from 'react'
import InputBox from '../atoms/InputBox'
import FormBtn from '../atoms/FormBtn'

const PostLocation: FC = () => {
  return (
    <div className="post-location">
      <div className="post-location__btn-wrap">
        <FormBtn
          className="post-location__return"
          name="戻る"
          onClick={() => {}}
        />
        <FormBtn
          className="post-location__next"
          name="次へ"
          onClick={() => {}}
        />
      </div>
    </div>
  )
}

export default PostLocation
