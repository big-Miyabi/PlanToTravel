import React, { FC } from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'
import { Place } from '../../utilities/types'
import EditItinerary from '../../components/organisms/EditItinerary'

type Props = {
  className: string
  itinerary: Place[][]
}

const EditItineraryContainer: FC<Props> = ({
  className,
  itinerary,
}) => {
  const dateS = useSelector(
    (state: RootState) => state.postReducer.dateS
  )
  const dateF = useSelector(
    (state: RootState) => state.postReducer.dateF
  )
  const dateDiff =
    moment(dateF).diff(moment(dateS), 'days') + 1

  return (
    <EditItinerary
      dateDiff={dateDiff}
      dateS={dateS}
      itinerary={itinerary}
    />
  )
}

export default EditItineraryContainer
