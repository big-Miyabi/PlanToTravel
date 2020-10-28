import React, { FC, useState } from 'react'
import * as H from 'history'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCreatedItinerary,
  setPostProgressIndex,
} from '../../actions/post'
import { RootState } from '../../reducers'
import PostLocation from '../../components/organisms/PostLocation'
import { Place, initialPlace } from '../../utilities/types'

type Props = {
  history: H.History
}

const PostLocationContainer: FC<Props> = ({ history }) => {
  const dispatch = useDispatch()
  const { dateS, dateF } = useSelector(
    (state: RootState) => state.postReducer
  )
  const dateDiff =
    moment(dateF).diff(moment(dateS), 'days') + 1

  const initialItinerary: Place[][] = [
    ...Array(dateDiff),
  ].map(() => [initialPlace])
  const [itinerary, setItinerary] = useState<Place[][]>(
    initialItinerary
  )

  const goToNext = () => {
    const sliced = itinerary.slice()
    setItinerary(sliced)
    dispatch(setCreatedItinerary(sliced))
    dispatch(setPostProgressIndex(2))
    history.push('/post/confirm')
  }

  const returnToPrevious = () => {
    history.push('/post/overview')
  }

  return (
    <PostLocation
      dateS={dateS}
      dateDiff={dateDiff}
      itinerary={itinerary}
      setItinerary={setItinerary}
      goToNext={goToNext}
      returnToPrevious={returnToPrevious}
    />
  )
}

export default PostLocationContainer
