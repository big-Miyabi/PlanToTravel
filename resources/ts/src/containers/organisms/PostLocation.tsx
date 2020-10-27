import React, { FC, useState } from 'react'
import * as H from 'history'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'
import PostLocation from '../../components/organisms/PostLocation'
import { Place, initialPlace } from '../../utilities/types'

type Props = {
  history: H.History
}

const PostLocationContainer: FC<Props> = ({ history }) => {
  const dateS = useSelector(
    (state: RootState) => state.postReducer.dateS
  )
  const dateF = useSelector(
    (state: RootState) => state.postReducer.dateF
  )
  const dateDiff =
    moment(dateF).diff(moment(dateS), 'days') + 1

  const initialItinerary: Place[][] = [
    ...Array(dateDiff),
  ].map(() => [initialPlace])
  const [itinerary, setItinerary] = useState<Place[][]>(
    initialItinerary
  )

  return (
    <PostLocation
      history={history}
      dateS={dateS}
      dateDiff={dateDiff}
      itinerary={itinerary}
    />
  )
}

export default PostLocationContainer
