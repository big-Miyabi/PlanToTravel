import React, { FC, Dispatch } from 'react'
import { colors } from '../../utilities/colors'
import { getChangeEventFunc } from '../../utilities/getEventFunc'
import {
  WeatherIcon,
  WeatherItem,
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
  isShownWeatherBox: boolean
  setIsShownWeatherBox: Dispatch<
    React.SetStateAction<boolean>
  >
  weatherItems: WeatherItem[]
  onSelectWeather: (index: number) => void
  selectedWeather: WeatherIcon
  ratingIcons: RatingIcon[]
  selectedRating: number
  onSelectRating: (index: number) => void
  isShownRatingBox: boolean
  setIsShownRatingBox: Dispatch<
    React.SetStateAction<boolean>
  >
  overlayClass: string
}

const EditPlace: FC<Props> = ({
  className,
  inputRef,
  setCustomName,
  showMap,
  isShownWeatherBox,
  setIsShownWeatherBox,
  weatherItems,
  onSelectWeather,
  selectedWeather,
  ratingIcons,
  selectedRating,
  onSelectRating,
  isShownRatingBox,
  setIsShownRatingBox,
  overlayClass,
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
        maxLength={63}
      />
      <FontAwesomeIconBtn
        className={
          'edit-place__weather--' + selectedWeather.name
        }
        icon={selectedWeather.icon}
        onClick={() => {
          setIsShownWeatherBox(!isShownWeatherBox)
        }}
      />
      {isShownWeatherBox ? (
        <div className="weather-box">
          {weatherItems.map((value, index) => {
            const selectedClass = value.isSelected
              ? '-selected'
              : ''

            return (
              <FontAwesomeIconBtn
                className={
                  'weather-box__' +
                  value.name +
                  selectedClass
                }
                icon={value.icon}
                onClick={() => {
                  onSelectWeather(index)
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
        className={`box-overlay ${overlayClass}`}
        style={
          isShownWeatherBox || isShownRatingBox
            ? {}
            : { display: 'none' }
        }
      ></div>
    </div>
  )
}

export default EditPlace
