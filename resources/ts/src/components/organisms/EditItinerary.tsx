import React, { FC } from 'react'
import * as H from 'history'
import moment from 'moment'
import EditDailyItinerary from '../../containers/organisms/EditDailyItinerary'

type Props = {
  className: string
  history: H.History
  dateDiff: number
  dateS: string
}

const EditItinerary: FC<Props> = ({
  className,
  history,
  dateDiff,
  dateS,
}) => {
  return (
    <div className={className + ' ' + 'edit-itinerary'}>
      {[...Array(dateDiff)].map((_, index) => {
        const date = moment(dateS)
          .add(index, 'd')
          .format('YYYY.MM.DD')

        return (
          <EditDailyItinerary
            history={history}
            date={date}
            dateIndex={index}
            key={index}
          />
        )
      })}
    </div>
  )
}

export default EditItinerary
