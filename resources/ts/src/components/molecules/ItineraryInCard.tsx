import React, { FC } from 'react'
import { ItineraryType } from '../../utilities/types'

type Props = {
  className: string
  itinerary: ItineraryType[]
}

const ItineraryInCard: FC<Props> = ({
  className,
  itinerary,
}) => {
  return (
    <div className={className + ' ' + 'itinerary-in-card'}>
      <p>aaa</p>
    </div>
  )
}

export default ItineraryInCard
