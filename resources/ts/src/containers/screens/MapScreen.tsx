import React, { FC, useEffect, useState } from 'react'
import { Coords, Props } from 'google-map-react'
import MapScreen from '../../components/screens/MapScreen'
/// <reference types="googlemaps" />

const MapScreenContainer: FC = () => {
  const center: Coords = {
    // 東京駅の座標
    lat: 35.68122839120453,
    lng: 139.7670679211538,
  }
  const [location, setLocation] = useState<Coords>(center)
  const zoom = 15 // 4.8にすると日本全体が見える

  const initGeocoder: Props['onGoogleApiLoaded'] = ({
    maps,
  }) => {
    const Geocoder: google.maps.Geocoder = new maps.Geocoder()
    const place = '国会議事堂'
    Geocoder.geocode(
      {
        address: place,
      },
      (results, status) => {
        console.log(results)
      }
    )
  }

  return (
    <MapScreen
      center={center}
      zoom={zoom}
      location={location}
      setLocation={setLocation}
      initGeocoder={initGeocoder}
    />
  )
}

export default MapScreenContainer
