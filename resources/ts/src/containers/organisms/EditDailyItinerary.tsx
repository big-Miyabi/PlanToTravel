import React, { FC } from 'react'
import * as H from 'history'
import { useDispatch, useSelector } from 'react-redux'
import { setShouldAppearMap } from '../../actions/map'
import EditDailyItinerary from '../../components/organisms/EditDailyItinerary'

type Props = {
  className: string
  history: H.History
  date: string
  index: number
}

const EditDailyItineraryContainer: FC<Props> = ({
  className,
  history,
  date,
  index,
}) => {
  const dispatch = useDispatch()
  const showMap = () => {
    dispatch(setShouldAppearMap(true))
  }

  return (
    <EditDailyItinerary
      className={className}
      history={history}
      date={date}
      index={index}
      showMap={showMap}
    />
  )
}

export default EditDailyItineraryContainer
