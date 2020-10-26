import React, { FC } from 'react'
import * as H from 'history'
import { colors } from '../../utilities/colors'
import MapIcon from '../atoms/svg/MapIcon'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import EditPlace from '../../containers/molecules/EditPlace'
import EditPlaceDetail from '../../containers/organisms/EditPlaceDetail'

type Props = {
  history: H.History
  date: string
  index: number
  showMap: () => void
  placeName: string | null
}

const EditDailyItinerary: FC<Props> = ({
  history,
  date,
  index,
  showMap,
  placeName,
}) => {
  return (
    <div className="edit-daily-itinerary__itinerary-for-the-day">
      <div className="edit-daily-itinerary__date-wrap">
        <div className="edit-daily-itinerary__date-border"></div>
        <p className="edit-daily-itinerary__date">{date}</p>
      </div>
      {placeName === null ? (
        <div
          className="edit-daily-itinerary__add-place"
          onClick={showMap}
        >
          <MapIcon
            className="edit-daily-itinerary__map-icon"
            shouldHavePlus={false}
            color={colors.navyBlue}
          />
          <p className="edit-daily-itinerary__p">
            場所を追加
          </p>
          <FontAwesomeIconBtn
            className="edit-daily-itinerary__plus"
            icon={faPlus}
            onClick={showMap}
          />
        </div>
      ) : (
        <div className="edit-daily-itinerary__add-place-detail-wrap">
          <EditPlace className="edit-daily-itinerary__edit-place" />

          <EditPlaceDetail className="edit-daily-itinerary__place-detail" />
        </div>
      )}
    </div>
  )
}

export default EditDailyItinerary
