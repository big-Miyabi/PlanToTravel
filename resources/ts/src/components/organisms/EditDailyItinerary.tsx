import React, { FC, Dispatch } from 'react'
import { Place } from '../../utilities/types'
import EditPlace from '../../containers/molecules/EditPlace'
import EditPlaceDetail from '../../containers/organisms/EditPlaceDetail'
import AddPlace from '../../containers/molecules/AddPlace'

type Props = {
  date: string
  dateIndex: number
  places: Place[]
  setPlaces: Dispatch<React.SetStateAction<Place[]>>
}

const EditDailyItinerary: FC<Props> = ({
  date,
  dateIndex,
  places,
  setPlaces,
}) => {
  return (
    <div className="edit-daily-itinerary__itinerary-for-the-day">
      <div className="edit-daily-itinerary__date-wrap">
        <div className="edit-daily-itinerary__date-border"></div>
        <p className="edit-daily-itinerary__date">{date}</p>
      </div>
      {places.map((value, index) => {
        return (
          <div
            className="edit-daily-itinerary__place"
            key={index}
          >
            {value.name !== null ? (
              <div className="edit-daily-itinerary__add-place-detail-wrap">
                <EditPlace
                  className="edit-daily-itinerary__edit-place"
                  places={places}
                  dateIndex={dateIndex}
                  placeIndex={index}
                />

                <EditPlaceDetail
                  className="edit-daily-itinerary__place-detail"
                  places={places}
                  dateIndex={dateIndex}
                  placeIndex={index}
                />
              </div>
            ) : (
              <></>
            )}
            {value.name === null ||
            places.length - 1 === index ? (
              <AddPlace
                dateIndex={dateIndex}
                placeIndex={index}
                places={places}
                setPlaces={setPlaces}
                date={date}
              />
            ) : (
              <></>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default EditDailyItinerary
