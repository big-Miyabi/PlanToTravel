import React, { FC, useState } from 'react'
import * as H from 'history'
import EditDailyItinerary from '../../components/organisms/EditDailyItinerary'
import { Place, initialPlace } from '../../utilities/types'

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
  // ここで一旦変数にオブジェクトを再代入しておかないと、オブジェクトは参照渡しのためplaces[0]を書き換えると全てのコンポーネントも同じように書き換わってしまう
  const initialPlaceByValue = { ...initialPlace }
  const [places, setPlaces] = useState<Place[]>([
    initialPlaceByValue,
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
