import React, { FC, useEffect } from 'react'
import EditDailyItinerary from '../../components/organisms/EditDailyItinerary'
import { Place, initialPlace } from '../../utilities/types'

type Props = {
  date: string
  dateIndex: number
  itinerary: Place[][]
  updateItinerary: () => void
}

const EditDailyItineraryContainer: FC<Props> = ({
  date,
  dateIndex,
  itinerary,
  updateItinerary,
}) => {
  // ここで一旦変数にオブジェクトを再代入しておかないと、オブジェクトは参照渡しのためplaces[0]を書き換えると全てのコンポーネントも同じように書き換わってしまう
  const initialPlaceByValue = {
    ...initialPlace,
    date,
  }
  useEffect(() => {
    itinerary[dateIndex] = [initialPlaceByValue]
  }, [])

  return (
    <EditDailyItinerary
      date={date}
      dateIndex={dateIndex}
      places={itinerary[dateIndex]}
      updateItinerary={updateItinerary}
    />
  )
}

export default EditDailyItineraryContainer
