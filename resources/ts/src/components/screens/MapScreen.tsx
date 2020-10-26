import React, { FC, Dispatch } from 'react'
import GoogleMapReact, {
  Coords,
  ClickEventValue,
} from 'google-map-react'
import {
  getKeyboardEventFunc,
  getChangeEventFunc,
} from '../../utilities/getEventFunc'
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
  initGeocoder: () => void
  onPutPin: (v: ClickEventValue) => void
  setInputValue: Dispatch<React.SetStateAction<string>>
  search: () => void
  hideMapScreen: () => void
  decidePlace: () => void
}

const MapScreen: FC<Props> = ({
  center,
  zoom,
  location,
  initGeocoder,
  onPutPin,
  setInputValue,
  search,
  hideMapScreen,
  decidePlace,
}) => {
  return (
    <div className="map-screen">
      <div className="map-screen__header">
        <FontAwesomeIconBtn
          className="map-screen__close"
          icon={faTimes}
          onClick={hideMapScreen}
        />
        <div className="location-search">
          <MapIcon
            className="location-search__map-icon"
            shouldHavePlus={false}
          />
          <input
            className="location-search__search-input"
            type="text"
            onChange={getChangeEventFunc(setInputValue)}
            onKeyPress={getKeyboardEventFunc(search)}
          />
          <FontAwesomeIconBtn
            className="location-search__search-icon"
            icon={faSearch}
            onClick={search}
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
        center={location}
        zoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onClick={onPutPin}
        onGoogleApiLoaded={initGeocoder}
        options={{
          gestureHandling: 'greedy',
        }}
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
        onClick={decidePlace}
      />
    </div>
  )
}

export default MapScreen
