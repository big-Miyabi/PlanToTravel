import React, { FC } from 'react'
import { Place } from '../../utilities/types'
import FormBtn from '../atoms/FormBtn'

type Props = {
  returnToPrevious: () => void
  itineraryInfo: Place[][]
}

const PostConfirm: FC<Props> = ({
  returnToPrevious,
  itineraryInfo,
}) => {
  return (
    <div className="post">
      <div className="post__content-wrap">
        <h2 className="post__h2">行程*</h2>

        <div className="itinerary">
          {itineraryInfo.map((value, index) => (
            <div
              className="itinerary__date-wrap"
              key={index}
            >
              <div className="itinerary__date-border"></div>
              <p className="itinerary__date">
                {value[0].date}
              </p>
            </div>
          ))}
        </div>

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
