import React, { FC } from 'react'
import { Place, transports } from '../../utilities/types'
import EditIcon from '../atoms/svg/EditIcon'
import WeatherPin from '../atoms/WeatherPin'
import RatingSelectIcon from '../molecules/RatingSelectIcon'
import TransportSelectIcon from '../molecules/TransportSelectIcon'

type Props = {
  place: Place
}

const PlaceContents: FC<Props> = ({ place }) => {
  const transportIndex = transports.findIndex(
    (v) => v === place.transport
  )

  return (
    <div className="place-contents">
      <div className="place-contents__row">
        <div className="place-contents__row-left">
          <WeatherPin
            className="place-contents__pin"
            weather={place.weather}
          />
          <h3 className="place-contents__name">
            {place.name}
          </h3>
        </div>

        {place.rating ? (
          <div className="place-contents__row-right">
            <RatingSelectIcon
              index={place.rating}
              classNamePrefix="place-contents-icon"
            />
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="place-detail">
        <div className="place-detail__left"></div>

        <div className="place-detail__right">
          {place.image && place.name ? (
            <img
              className="place-detail__image"
              src={place.image}
              alt={place.name}
            />
          ) : (
            <></>
          )}

          {place.comment ? (
            <div className="place-detail__comment-wrap">
              <EditIcon className="place-detail__comment-icon" />
              <p>{place.comment}</p>
            </div>
          ) : (
            <></>
          )}

          {transportIndex !== 7 && place.transportDetail ? (
            <div className="place-detail__transport-wrap">
              <TransportSelectIcon
                index={transportIndex}
                className="place-detail__transport-icon"
                classNamePrefix="selected-icon__"
              />
              <p className="place-detail__transport-detail">
                {place.transportDetail}
              </p>
            </div>
          ) : (
            <></>
          )}

          {place.distance ? (
            <p className="place-detail__distance">
              {place.distance}
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}

export default PlaceContents
