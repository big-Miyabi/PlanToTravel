import React, { FC } from 'react'
import * as H from 'history'
import { colors } from '../../utilities/colors'
import EditPlace from '../../containers/molecules/EditPlace'
import EditPlaceDetail from '../../containers/organisms/EditPlaceDetail'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import MapIcon from '../atoms/svg/MapIcon'

type Props = {
  className: string
  history: H.History
  showMap: () => void
}

const EditItinerary: FC<Props> = ({
  className,
  history,
  showMap,
}) => {
  return (
    <>
      <div className={className + ' ' + 'edit-itinerary'}>
        <div className="edit-itinerary__date-wrap">
          <div className="edit-itinerary__date-border"></div>
          <p className="edit-itinerary__date">2020.10.06</p>
        </div>
        <div className="edit-itinerary__add-place-detail-wrap">
          <EditPlace className="edit-itinerary__edit-place" />

          <EditPlaceDetail className="edit-itinerary__place-detail" />
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
          />
        </div>

        <div className="edit-itinerary__date-wrap">
          <div className="edit-itinerary__date-border"></div>
          <p className="edit-itinerary__date">2020.10.07</p>
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
          />
        </div>
        <div className="edit-itinerary__date-wrap">
          <div className="edit-itinerary__date-border"></div>
          <p className="edit-itinerary__date">2020.10.08</p>
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
    </>
  )
}

export default EditItinerary
