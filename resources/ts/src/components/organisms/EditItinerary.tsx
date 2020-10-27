import React, { FC } from 'react'
import { Place } from '../../utilities/types'
import moment from 'moment'
import EditDailyItinerary from '../../containers/organisms/EditDailyItinerary'

type Props = {
  dateDiff: number
  dateS: string
  itinerary: Place[][]
}

const EditItinerary: FC<Props> = ({
  dateDiff,
  dateS,
  itinerary,
}) => {
  return (
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
            key={index}
          />
        )
      })}
    </div>
  )
}

export default EditItinerary
