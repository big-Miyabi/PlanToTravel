import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { setShouldAppearMap } from '../../actions/map'
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
  const dispatch = useDispatch()
  const showMap = () => {
    dispatch(setShouldAppearMap(true))
  }

  return (
    <EditItinerary
      className={className}
      history={history}
      showMap={showMap}
    />
  )
}

export default EditItineraryContainer
