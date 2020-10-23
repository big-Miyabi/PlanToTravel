import React, { FC, useState } from 'react'
import { Coords } from 'google-map-react'
import MapScreen from '../../components/screens/MapScreen'

const MapScreenContainer: FC = () => {
  const center: Coords = {
    // 東京駅の座標
    lat: 35.68122839120453,
    lng: 139.7670679211538,
  }
  const [location, setLocation] = useState<Coords>(center)
  const zoom = 15 // 4.8にすると日本全体が見える

  return (
    <MapScreen
      center={center}
      zoom={zoom}
      location={location}
      setLocation={setLocation}
    />
  )
}

export default MapScreenContainer
