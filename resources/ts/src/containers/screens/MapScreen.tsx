import React, { FC } from 'react'
import { Coords } from 'google-map-react'
import MapScreen from '../../components/screens/MapScreen'

const MapScreenContainer: FC = () => {
  const center: Coords = {
    lat: 36.41032863354583,
    lng: 138.34662204985045,
  }
  const zoom = 4.8

  return <MapScreen center={center} zoom={zoom} />
}

export default MapScreenContainer
