import React, { FC } from 'react'
import { ItineraryCardType } from '../../utilities/types'
import WeatherPin from '../atoms/WeatherPin'

type Props = {
  className: string
  itinerary: ItineraryCardType[]
  gradientId?: string
}

const ItineraryInCard: FC<Props> = ({
  className,
  itinerary,
  gradientId,
}) => {
  const bemElement =
    itinerary.length > 3 ? '__gradation-wrap' : '__wrap'

  return (
    <div className={className + ' ' + 'itinerary-in-card'}>
      <div className={'itinerary-in-card' + bemElement}>
        {itinerary.map((item, key) => {
          if (key > 2) return
          const lineModifier =
            itinerary.length > 3 ? `--gradation-${key}` : ''

          return (
            <div key={key}>
              <div className="itinerary-in-card__place">
                <WeatherPin
                  className="itinerary-in-card__pin"
                  weather={item.weather}
                  index={key}
                  gradientId={
                    gradientId !== undefined &&
                    itinerary.length > 3
                      ? `${gradientId}_${key}`
                      : undefined
                  }
                />
                <p className="itinerary-in-card__place-name">
                  {item.place}
                </p>
              </div>

              {key === itinerary.length - 1 ? (
                <></>
              ) : (
                <div
                  className={
                    'itinerary-in-card__line' + lineModifier
                  }
                ></div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ItineraryInCard
