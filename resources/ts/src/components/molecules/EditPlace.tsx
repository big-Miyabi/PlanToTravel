import React, { FC, Dispatch } from 'react'
import { colors } from '../../utilities/colors'
import { getChangeEventFunc } from '../../utilities/getEventFunc'
import {
  WhetherIcon,
  WhetherItem,
} from '../../utilities/types'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
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
  whetherItems: WhetherItem[]
  onSelectWhether: (index: number) => void
  selectedWhether: WhetherIcon
}

const EditPlace: FC<Props> = ({
  className,
  inputRef,
  setCustomName,
  showMap,
  shouldShowWhetherBox,
  setShouldShowWhetherBox,
  whetherItems,
  onSelectWhether,
  selectedWhether,
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
        className={
          'edit-place__whether--' + selectedWhether.name
        }
        icon={selectedWhether.icon}
        onClick={() => {
          setShouldShowWhetherBox(!shouldShowWhetherBox)
        }}
      />
      {shouldShowWhetherBox ? (
        <div className="whether-box">
          {whetherItems.map((value, index) => {
            const selectedClass = value.isSelected
              ? '-selected'
              : ''

            return (
              <FontAwesomeIconBtn
                className={
                  'whether-box__' +
                  value.name +
                  selectedClass
                }
                icon={value.icon}
                onClick={() => {
                  onSelectWhether(index)
                }}
                key={index}
              />
            )
          })}
        </div>
      ) : (
        <></>
      )}
      <DashedCircle className="edit-place__rating" />
    </div>
  )
}

export default EditPlace
