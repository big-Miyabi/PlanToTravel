import React, { FC } from 'react'
import { Place } from '../../utilities/types'
import EditPlace from '../../containers/molecules/EditPlace'
import EditPlaceDetail from '../../containers/organisms/EditPlaceDetail'
import AddPlace from '../../containers/molecules/AddPlace'

type Props = {
  places: Place[]
  place: Place
  placeIndex: number
  dateIndex: number
  updateItinerary: () => void
}

const EditPlaceContentsContainer: FC<Props> = ({
  places,
  place,
  placeIndex,
  dateIndex,
  updateItinerary,
}) => {
  return (
    <div
      className="edit-daily-itinerary__place"
      key={placeIndex}
    >
      {place.name !== null ? (
        <div className="edit-daily-itinerary__add-place-detail-wrap">
          <EditPlace
            className="edit-daily-itinerary__edit-place"
            places={places}
            dateIndex={dateIndex}
            placeIndex={placeIndex}
          />

          <EditPlaceDetail
            className="edit-daily-itinerary__place-detail"
            places={places}
            dateIndex={dateIndex}
            placeIndex={placeIndex}
            updateItinerary={updateItinerary}
          />
        </div>
      ) : (
        <></>
      )}
      {place.name === null ||
      places.length - 1 === placeIndex ? (
        <AddPlace
          dateIndex={dateIndex}
          placeIndex={placeIndex}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default EditPlaceContentsContainer
