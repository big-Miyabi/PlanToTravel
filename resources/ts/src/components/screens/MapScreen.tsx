import React, { FC, Dispatch } from 'react'
import GoogleMapReact, { Coords } from 'google-map-react'

type Props = {
  center: Coords
  zoom: number
  location: Coords
  setLocation: Dispatch<React.SetStateAction<Coords>>
}

const MapScreen: FC<Props> = ({
  center,
  zoom,
  location,
  setLocation,
}) => {
  return (
    <div className="map-screen">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: `${process.env.MIX_GOOGLE_MAPS_API_KEY}`,
        }}
        defaultCenter={center}
        defaultZoom={zoom}
        onClick={(v) => {
          console.log(v)
          setLocation({ lat: v.lat, lng: v.lng })
        }}
      ></GoogleMapReact>
    </div>
  )
}

export default MapScreen
