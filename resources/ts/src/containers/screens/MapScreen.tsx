import React, { FC, Dispatch, useState } from 'react'
import { Coords, ClickEventValue } from 'google-map-react'
import MapScreen from '../../components/screens/MapScreen'
import axios from 'axios'
/// <reference types="googlemaps" />
type Geocoder = google.maps.Geocoder
type PlaceResult = google.maps.places.PlaceResult

const getPlaceName = (
  placeId: string
): Promise<{ result: PlaceResult; isSuccess: boolean }> => {
  return new Promise((resolve) => {
    axios
      .post('/api/getPlaceName', {
        placeId,
      })
      .then((res) => {
        const result = res.data.result
        console.log('getPlaceName(): success')
        resolve({ result, isSuccess: true })
      })
      .catch((error) => {
        console.log('getPlaceName():error')
        resolve({ result: error, isSuccess: false })
      })
  })
}

type NameSearch = {
  targetName: string
  setPlaceName: Dispatch<React.SetStateAction<string>>
  setLocation: Dispatch<React.SetStateAction<Coords>>
}

type LatLngSearch = {
  location: Coords
  setPlaceName: Dispatch<React.SetStateAction<string>>
}

const searchWithGeocoder = (
  arg: NameSearch | LatLngSearch // 場所名検索 or 緯度経度検索
) => {
  const Geocoder: Geocoder = new google.maps.Geocoder()
  Geocoder.geocode(
    {
      address:
        'targetName' in arg ? arg.targetName : undefined,
      location:
        'location' in arg ? arg.location : undefined,
    },
    async (results, status) => {
      if (status == 'ZERO_RESULTS') {
        alert('見つかりません')

        return
      }
      if (status !== 'OK') {
        console.log(status)
        alert('エラー発生')

        return
      }
      const place = await getPlaceName(results[0].place_id)
      const name = place.isSuccess ? place.result.name : ''

      // 場所名検索の時は緯度経度もセットする
      if ('setLocation' in arg) {
        const lat = results[0].geometry.location.lat()
        const lng = results[0].geometry.location.lng()
        arg.setLocation({ lat, lng })
        console.log(lat)
        console.log(lng)
      }
      arg.setPlaceName(name)
      console.log(name)
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
  const [targetName, setTargetName] = useState<string>('')
  const [placeName, setPlaceName] = useState<string>('')
  const zoom = 15 // 4.8にすると日本全体が見える

  const initGeocoder = () => {
    setIsReady(true)
  }

  const search = () => {
    if (!isReady || targetName === '') return
    searchWithGeocoder({
      targetName,
      setPlaceName,
      setLocation,
    })
  }

  const onPutPin = (v: ClickEventValue) => {
    const location: Coords = {
      lat: v.lat,
      lng: v.lng,
    }
    setLocation(location)
    searchWithGeocoder({ location, setPlaceName })
  }

  return (
    <MapScreen
      center={center}
      zoom={zoom}
      location={location}
      initGeocoder={initGeocoder}
      onPutPin={onPutPin}
      setTargetName={setTargetName}
      search={search}
    />
  )
}

export default MapScreenContainer
