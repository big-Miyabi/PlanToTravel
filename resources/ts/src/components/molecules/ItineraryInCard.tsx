import React, { FC } from 'react'
import { ItineraryType } from '../../utilities/types'
import WhetherPin from '../atoms/WhetherPin'

type Props = {
  className: string
  itinerary: ItineraryType[]
}

const ItineraryInCard: FC<Props> = ({
  className,
  itinerary,
}) => {
  return (
    <div className={className + ' ' + 'itinerary-in-card'}>
      {itinerary.map((item, key) => {
        if (key > 2) return

        return (
          <div
            className="itinerary-in-card__place"
            key={key}
          >
            <WhetherPin
              className="itinerary-in-card__pin"
              whether={item.whether}
            />
            <p className="itinerary-in-card__place-name">
              {item.place}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default ItineraryInCard
