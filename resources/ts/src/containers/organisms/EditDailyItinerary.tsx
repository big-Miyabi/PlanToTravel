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

  // useEffect(() => {
  //   ;(() => { // eslint-disable-line
  //     if (target.dateIndex === dateIndex) {
  //       setIsTarget(true)

  //       return
  //     }
  //     if (isTarget) {
  //       setLocation({ lat, lng })
  //       setPlaceName(name)
  //       console.log('ok!')
  //       console.log(name)
  //     }
  //     setIsTarget(false)
  //   })()
  // }, [target.dateIndex, target.placeIndex])

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
