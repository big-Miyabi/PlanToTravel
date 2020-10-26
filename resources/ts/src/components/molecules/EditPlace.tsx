import React, { FC, Dispatch } from 'react'
import { colors } from '../../utilities/colors'
import { getChangeEventFunc } from '../../utilities/getEventFunc'
import {
  WhetherIcon,
  WhetherItem,
  RatingIcon,
} from '../../utilities/types'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import RatingSelectIcon from './RatingSelectIcon'
import MapIcon from '../atoms/svg/MapIcon'
import PlusInputBox from '../atoms/PlusInputBox'

type Props = {
  className: string
  inputRef: React.RefObject<HTMLInputElement>
  setCustomName: (value: string) => void
  showMap: () => void
  isShownWhetherBox: boolean
  setIsShownWhetherBox: Dispatch<
    React.SetStateAction<boolean>
  >
  whetherItems: WhetherItem[]
  onSelectWhether: (index: number) => void
  selectedWhether: WhetherIcon
  ratingIcons: RatingIcon[]
  selectedRating: number
  onSelectRating: (index: number) => void
  isShownRatingBox: boolean
  setIsShownRatingBox: Dispatch<
    React.SetStateAction<boolean>
  >
  dateIndex: number
  placeIndex: number
}

const EditPlace: FC<Props> = ({
  className,
  inputRef,
  setCustomName,
  showMap,
  isShownWhetherBox,
  setIsShownWhetherBox,
  whetherItems,
  onSelectWhether,
  selectedWhether,
  ratingIcons,
  selectedRating,
  onSelectRating,
  isShownRatingBox,
  setIsShownRatingBox,
  dateIndex,
  placeIndex,
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
          setIsShownWhetherBox(!isShownWhetherBox)
        }}
      />
      {isShownWhetherBox ? (
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
      <RatingSelectIcon
        index={selectedRating}
        classNamePrefix="edit-place__rating-"
        onClick={() => {
          setIsShownRatingBox(!isShownRatingBox)
        }}
      />
      {isShownRatingBox ? (
        <div className="rating-box">
          {ratingIcons.map((value, index) => {
            const selectedClass = value.isSelected
              ? '-selected'
              : ''

            return (
              <RatingSelectIcon
                index={index + 1}
                classNamePrefix="rating-box__"
                selectedClass={selectedClass}
                key={index}
                onClick={() => {
                  onSelectRating(index)
                }}
              />
            )
          })}
        </div>
      ) : (
        <></>
      )}
      <div
        className={`box-overlay box-overlay__${dateIndex}-${placeIndex}`}
        style={
          isShownWhetherBox || isShownRatingBox
            ? {}
            : { display: 'none' }
        }
      ></div>
    </div>
  )
}

export default EditPlace
