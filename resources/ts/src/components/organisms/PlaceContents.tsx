import React, { FC } from 'react'
import { Place, transports } from '../../utilities/types'
import EditIcon from '../atoms/svg/EditIcon'
import WeatherPin from '../atoms/WeatherPin'
import TransportSelectIcon from '../molecules/TransportSelectIcon'

type Props = {
  place: Place
}

const PlaceContents: FC<Props> = ({ place }) => {
  return (
    <div className="place-contents">
      <div className="place-contents__row">
        <WeatherPin
          className="place-contents__pin"
          weather={place.weather}
        />
        <h3 className="place-contents__name">
          {place.name}
        </h3>
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
          <div className="place-detail__comment-wrap">
            <EditIcon className="place-detail__comment-icon" />
            <p>{place.comment}</p>
          </div>

          <div className="place-detail__transport-wrap">
            <TransportSelectIcon
              index={transports.findIndex(
                (v) => v === place.transport
              )}
              className="place-detail__transport-icon"
              classNamePrefix="selected-icon__"
            />
            <p className="place-detail__transport-detail">
              {place.transportDetail}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceContents
