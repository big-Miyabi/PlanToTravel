import React, { FC } from 'react'
import { colors } from '../../utilities/colors'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import {
  faSun,
  faCloud,
  faUmbrella,
  faSnowflake,
  faMoon,
} from '@fortawesome/free-solid-svg-icons'
import DashedCircle from '../atoms/svg/DashedCircle'
import BadFace from '../atoms/svg/BadFace'
import SosoFace from '../atoms/svg/SosoFace'
import GoodFace from '../atoms/svg/GoodFace'
import MapIcon from '../atoms/svg/MapIcon'
import PlusInputBox from '../atoms/PlusInputBox'

type Props = {
  className: string
}

const EditPlace: FC<Props> = ({ className }) => {
  return (
    <div className={className + ' ' + 'edit-place'}>
      <MapIcon
        className="edit-place__map-icon"
        shouldHavePlus={false}
        color={colors.navyBlue}
      />
      <PlusInputBox
        type="text"
        className="edit-place__input"
      />
      <FontAwesomeIconBtn
        className="edit-place__whether--sun"
        icon={faSun}
      />
      <DashedCircle className="edit-place__rating" />
    </div>
  )
}

export default EditPlace
