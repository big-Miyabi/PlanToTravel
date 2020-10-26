import React, { FC } from 'react'
import { colors } from '../../utilities/colors'
import MapIcon from '../atoms/svg/MapIcon'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

type Props = {
  showMap: () => void
}

const AddPlace: FC<Props> = ({ showMap }) => {
  return (
    <div
      className="edit-daily-itinerary__add-place"
      onClick={showMap}
    >
      <MapIcon
        className="edit-daily-itinerary__map-icon"
        shouldHavePlus={false}
        color={colors.navyBlue}
      />
      <p className="edit-daily-itinerary__p">場所を追加</p>
      <FontAwesomeIconBtn
        className="edit-daily-itinerary__plus"
        icon={faPlus}
        onClick={showMap}
      />
    </div>
  )
}

export default AddPlace
