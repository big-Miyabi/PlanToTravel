import React, { FC, useState } from 'react'
import EditDailyItinerary from '../../components/organisms/EditDailyItinerary'
import { Place, initialPlace } from '../../utilities/types'

type Props = {
  date: string
  dateIndex: number
  itinerary: Place[][]
}

const EditDailyItineraryContainer: FC<Props> = ({
  date,
  dateIndex,
}) => {
  // ここで一旦変数にオブジェクトを再代入しておかないと、オブジェクトは参照渡しのためplaces[0]を書き換えると全てのコンポーネントも同じように書き換わってしまう
  const initialPlaceByValue = {
    ...initialPlace,
    date,
  }
  const [places, setPlaces] = useState<Place[]>([
    initialPlaceByValue,
  ])

  return (
    <EditDailyItinerary
      date={date}
      dateIndex={dateIndex}
      places={places}
      setPlaces={setPlaces}
    />
  )
}

export default EditDailyItineraryContainer
