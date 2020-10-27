import React, { FC, Dispatch } from 'react'
import * as H from 'history'
import { Place } from '../../utilities/types'
import FormBtn from '../atoms/FormBtn'
import moment from 'moment'
import EditDailyItinerary from '../../containers/organisms/EditDailyItinerary'

type Props = {
  history: H.History
  dateDiff: number
  dateS: string
  itinerary: Place[][]
  setItinerary: Dispatch<React.SetStateAction<Place[][]>>
  onClickNext: () => void
}

const PostLocation: FC<Props> = ({
  history,
  dateDiff,
  dateS,
  itinerary,
  setItinerary,
  onClickNext,
}) => {
  return (
    <div className="post">
      <div className="post__content-wrap">
        <h2 className="post__h2">行程*</h2>

        <div className="edit-itinerary">
          {[...Array(dateDiff)].map((_, index) => {
            const date = moment(dateS)
              .add(index, 'd')
              .format('YYYY.MM.DD')

            return (
              <EditDailyItinerary
                date={date}
                dateIndex={index}
                itinerary={itinerary}
                setItinerary={setItinerary}
                key={index}
              />
            )
          })}
        </div>

        <div className="post__btn-wrap">
          <FormBtn
            className="post__return"
            name="戻る"
            onClick={() => {}} // eslint-disable-line
          />
          <FormBtn
            className="post__next"
            name="次へ"
            onClick={onClickNext}
          />
        </div>
      </div>
    </div>
  )
}

export default PostLocation
