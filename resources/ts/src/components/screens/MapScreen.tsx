import React, { FC } from 'react'
import GoogleMapReact, { Coords } from 'google-map-react'

type Props = {
  center: Coords
  zoom: number
}

const MapScreen: FC<Props> = ({ center, zoom }) => {
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
        }}
      />
    </div>
  )
}

export default MapScreen
