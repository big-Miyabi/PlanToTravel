import React, { FC } from 'react'
import FormBtn from '../atoms/FormBtn'

type Props = {
  returnToPrevious: () => void
}

const PostConfirm: FC<Props> = ({ returnToPrevious }) => {
  return (
    <div className="post">
      <div className="post__content-wrap">
        <h2 className="post__h2">行程*</h2>

        <div className="itinerary"></div>

        <div className="post__btn-wrap">
          <FormBtn
            className="post__return"
            name="戻る"
            onClick={returnToPrevious}
          />
          <FormBtn
            className="post__next"
            name="この内容で投稿"
            onClick={() => {}} // eslint-disable-line
          />
        </div>
      </div>
    </div>
  )
}

export default PostConfirm
