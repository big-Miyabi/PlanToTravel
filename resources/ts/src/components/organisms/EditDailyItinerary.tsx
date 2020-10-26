import React, { FC } from 'react'
import * as H from 'history'
import { colors } from '../../utilities/colors'
import MapIcon from '../atoms/svg/MapIcon'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

type Props = {
  className: string
  history: H.History
  date: string
  index: number
  showMap: () => void
}

const EditDailyItinerary: FC<Props> = ({
  className,
  history,
  date,
  index,
  showMap,
}) => {
  console.log(index)

  return (
    <div className="edit-itinerary__itinerary-for-the-day">
      <div className="edit-itinerary__date-wrap">
        <div className="edit-itinerary__date-border"></div>
        <p className="edit-itinerary__date">{date}</p>
      </div>
      <div
        className="edit-itinerary__add-place"
        onClick={showMap}
      >
        <MapIcon
          className="edit-itinerary__map-icon"
          shouldHavePlus={false}
          color={colors.navyBlue}
        />
        <p className="edit-itinerary__p">場所を追加</p>
        <FontAwesomeIconBtn
          className="edit-itinerary__plus"
          icon={faPlus}
          onClick={showMap}
        />
      </div>
    </div>
  )
}

export default EditDailyItinerary
