import React, { FC } from 'react'
import { Place } from '../../utilities/types'
import EditPlaceContents from '../../containers/organisms/EditPlaceContents'

type Props = {
  date: string
  dateIndex: number
  places: Place[]
  updateItinerary: () => void
}

const EditDailyItinerary: FC<Props> = ({
  date,
  dateIndex,
  places,
  updateItinerary,
}) => {
  return (
    <div className="edit-daily-itinerary__itinerary-for-the-day">
      <div className="edit-daily-itinerary__date-wrap">
        <div className="edit-daily-itinerary__date-border"></div>
        <p className="edit-daily-itinerary__date">{date}</p>
      </div>
      {places.map((place, placeIndex) => {
        return (
          <EditPlaceContents
            places={places}
            place={place}
            placeIndex={placeIndex}
            dateIndex={dateIndex}
            updateItinerary={updateItinerary}
            key={placeIndex}
          />
        )
      })}
    </div>
  )
}

export default EditDailyItinerary
