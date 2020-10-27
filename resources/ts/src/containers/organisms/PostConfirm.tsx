import React, { FC, useState } from 'react'
import * as H from 'history'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'
import { Place } from '../../utilities/types'
import PostConfirm from '../../components/organisms/PostConfirm'

type Props = {
  history: H.History
}

const PostConfirmContainer: FC<Props> = ({ history }) => {
  const itineraryInfo: Place[][] = useSelector(
    (state: RootState) => state.postReducer.itinerary
  )
  const returnToPrevious = () => {
    history.push('/post/location')
  }

  return (
    <PostConfirm
      returnToPrevious={returnToPrevious}
      itineraryInfo={itineraryInfo}
    />
  )
}

export default PostConfirmContainer
