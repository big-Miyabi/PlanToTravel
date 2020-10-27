import React, {
  FC,
  Dispatch,
  useEffect,
  useState,
} from 'react'
import EditDailyItinerary from '../../components/organisms/EditDailyItinerary'
import { Place, initialPlace } from '../../utilities/types'

type Props = {
  date: string
  dateIndex: number
  itinerary: Place[][]
  setItinerary: Dispatch<React.SetStateAction<Place[][]>>
}

const EditDailyItineraryContainer: FC<Props> = ({
  date,
  dateIndex,
  itinerary,
  setItinerary,
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
      itinerary={itinerary}
      setItinerary={setItinerary}
    />
  )
}

export default EditDailyItineraryContainer
