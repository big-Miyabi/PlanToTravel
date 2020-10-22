import React, { FC } from 'react'
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
  return (
    <EditItinerary
      className={className}
      history={history}
    />
  )
}

export default EditItineraryContainer
