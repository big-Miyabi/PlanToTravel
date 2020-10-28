import React, { FC } from 'react'
import { Place } from '../../utilities/types'
import PlaceContents from './PlaceContents'

type Props = {
  itineraryInfo: Place[][]
}

const Itinerary: FC<Props> = ({ itineraryInfo }) => {
  return (
    <div className="itinerary">
      {itineraryInfo.map((places, dateIndex) => (
        <div className="itinerary__daily" key={dateIndex}>
          <div
            className="itinerary__date-wrap"
            key={dateIndex}
          >
            <div className="itinerary__date-border"></div>
            <p className="itinerary__date">
              {places[0].date}
            </p>
          </div>
          {places.map((place, placeIndex) => (
            <PlaceContents place={place} key={placeIndex} />
          ))}
        </div>
      ))}
      <div className="itinerary__end-line"></div>
    </div>
  )
}

export default Itinerary
