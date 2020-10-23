import React, { FC, useState } from 'react'
import { Coords } from 'google-map-react'
import MapScreen from '../../components/screens/MapScreen'

const MapScreenContainer: FC = () => {
  const center: Coords = {
    lat: 36.41032863354583,
    lng: 138.34662204985045,
  }
  const [location, setLocation] = useState<Coords>(center)
  const zoom = 4.8

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
