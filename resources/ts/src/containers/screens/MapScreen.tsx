import React, { FC, useState } from 'react'
import { Coords } from 'google-map-react'
import MapScreen from '../../components/screens/MapScreen'
import axios from 'axios'
/// <reference types="googlemaps" />
type Geocoder = google.maps.Geocoder

const getPlaceName = (placeId: string) => {
  axios
    .post('/api/getPlaceName', {
      placeId,
    })
    .then((res) => {
      const result = res.data.result
      console.log('success')
      console.log(result)
    })
    .catch((error) => {
      console.log('error')
      console.log(error)
    })
}

const searchWithGeocoder = (searchName: string) => {
  const Geocoder: Geocoder = new google.maps.Geocoder()
  Geocoder.geocode(
    {
      address: searchName,
    },
    (results, status) => {
      if (status == 'ZERO_RESULTS') {
        alert('見つかりません')

        return
      }
      if (status !== 'OK') {
        console.log(status)
        alert('エラー発生')

        return
      }
      getPlaceName(results[0].place_id)
      const lat = results[0].geometry.location.lat()
      const lng = results[0].geometry.location.lng()
      console.log(lat)
      console.log(lng)
    }
  )
}

const MapScreenContainer: FC = () => {
  const center: Coords = {
    // 東京駅の座標
    lat: 35.68122839120453,
    lng: 139.7670679211538,
  }
  const [location, setLocation] = useState<Coords>(center)
  const [isReady, setIsReady] = useState<boolean>(false)
  const [searchName, setSearchName] = useState<string>('')
  const [placeName, setPlaceName] = useState<string>('')
  const zoom = 15 // 4.8にすると日本全体が見える

  const initGeocoder = () => {
    setIsReady(true)
    searchWithGeocoder('国会議事堂')
  }

  const search = () => {
    if (!isReady || searchName === '') return
    searchWithGeocoder(searchName)
  }

  return (
    <MapScreen
      center={center}
      zoom={zoom}
      location={location}
      initGeocoder={initGeocoder}
      setLocation={setLocation}
      setSearchName={setSearchName}
      search={search}
    />
  )
}

export default MapScreenContainer
