import React, { FC, Dispatch } from 'react'
import GoogleMapReact, {
  Coords,
  Props as MapProps,
} from 'google-map-react'
import MapIcon from '../atoms/svg/MapIcon'
import FormBtn from '../atoms/FormBtn'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import {
  faTimes,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'

type Props = {
  center: Coords
  zoom: number
  location: Coords
  setLocation: Dispatch<React.SetStateAction<Coords>>
  initGeocoder: MapProps['onGoogleApiLoaded']
}

const MapScreen: FC<Props> = ({
  center,
  zoom,
  location,
  setLocation,
  initGeocoder,
}) => {
  return (
    <div className="map-screen">
      <div className="map-screen__header">
        <FontAwesomeIconBtn
          className="map-screen__close"
          icon={faTimes}
        />
        <div className="location-search">
          <MapIcon
            className="location-search__map-icon"
            shouldHavePlus={false}
          />
          <input
            className="location-search__search-input"
            type="text"
          />
          <FontAwesomeIconBtn
            className="location-search__search-icon"
            icon={faSearch}
          />
        </div>
      </div>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: `${process.env.MIX_GOOGLE_MAPS_API_KEY}`,
          language: 'ja',
          region: 'ja',
        }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onClick={(v) => {
          console.log(v)
          setLocation({ lat: v.lat, lng: v.lng })
        }}
        onGoogleApiLoaded={initGeocoder}
      >
        <MapIcon
          className={'map-screen__pin'}
          lat={location.lat}
          lng={location.lng}
        />
      </GoogleMapReact>
      <FormBtn
        className="map-screen__add-btn"
        name="この場所を追加"
          onClick={() => {}} // eslint-disable-line
      />
    </div>
  )
}

export default MapScreen
