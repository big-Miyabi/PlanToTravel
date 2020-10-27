import React, { FC } from 'react'
import { Place } from '../../utilities/types'
import FormBtn from '../atoms/FormBtn'
import PlaceContents from './PlaceContents'

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
          {itineraryInfo.map((places, dateIndex) => (
            <div className="itinerary__daily">
              <div
                className="itinerary__date-wrap"
                key={dateIndex}
              >
                <div className="itinerary__date-border"></div>
                <p className="itinerary__date">
                  {places[0].date}
                </p>
              </div>
              {places.map((place, placeIndex) => (
                <PlaceContents
                  place={place}
                  key={placeIndex}
                />
              ))}
            </div>
          ))}
          <div className="itinerary__end-line"></div>
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
