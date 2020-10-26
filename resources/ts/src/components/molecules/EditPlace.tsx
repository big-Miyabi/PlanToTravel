import React, { FC, Dispatch } from 'react'
import { colors } from '../../utilities/colors'
import { getChangeEventFunc } from '../../utilities/getEventFunc'
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
  inputRef: React.RefObject<HTMLInputElement>
  setCustomName: (value: string) => void
  showMap: () => void
  shouldShowWhetherBox: boolean
  setShouldShowWhetherBox: Dispatch<
    React.SetStateAction<boolean>
  >
}

const EditPlace: FC<Props> = ({
  className,
  inputRef,
  setCustomName,
  showMap,
  shouldShowWhetherBox,
  setShouldShowWhetherBox,
}) => {
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
        placeholder="場所名を入力"
        inputRef={inputRef}
        onChange={getChangeEventFunc(setCustomName)}
        onClick={showMap}
      />
      <FontAwesomeIconBtn
        className="edit-place__whether--sun"
        icon={faSun}
        onClick={() => {
          setShouldShowWhetherBox(!shouldShowWhetherBox)
        }}
      />
      {shouldShowWhetherBox ? (
        <div className="whether-box">
          <FontAwesomeIconBtn
            className="whether-box__sun-selected"
            icon={faSun}
          />
          <FontAwesomeIconBtn
            className="whether-box__cloud"
            icon={faCloud}
          />
          <FontAwesomeIconBtn
            className="whether-box__rain"
            icon={faUmbrella}
          />
          <FontAwesomeIconBtn
            className="whether-box__snow"
            icon={faSnowflake}
          />
          <FontAwesomeIconBtn
            className="whether-box__night"
            icon={faMoon}
          />
        </div>
      ) : (
        <></>
      )}
      <DashedCircle className="edit-place__rating" />
    </div>
  )
}

export default EditPlace
