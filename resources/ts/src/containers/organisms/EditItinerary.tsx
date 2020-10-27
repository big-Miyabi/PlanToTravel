import React, { FC } from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'
import * as H from 'history'
import EditItinerary from '../../components/organisms/EditItinerary'

type Props = {
  className: string
  history: H.History
}

const EditItineraryContainer: FC<Props> = ({
  className,
  history,
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
      className={className}
      history={history}
      dateDiff={dateDiff}
      dateS={dateS}
    />
  )
}

export default EditItineraryContainer
