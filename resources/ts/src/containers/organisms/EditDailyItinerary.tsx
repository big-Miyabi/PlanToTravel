import React, { FC, useState, useEffect } from 'react'
import * as H from 'history'
import EditDailyItinerary from '../../components/organisms/EditDailyItinerary'
import { Place } from '../../utilities/types'

type Props = {
  history: H.History
  date: string
  dateIndex: number
}

const EditDailyItineraryContainer: FC<Props> = ({
  history,
  date,
  dateIndex,
}) => {
  const [places, setPlaces] = useState<Place[]>([
    {
      name: null,
      location: null,
    },
  ])

  return (
    <EditDailyItinerary
      history={history}
      date={date}
      dateIndex={dateIndex}
      places={places}
      setPlaces={setPlaces}
    />
  )
}

export default EditDailyItineraryContainer
