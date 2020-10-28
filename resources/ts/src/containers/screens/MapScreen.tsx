import React, { FC, Dispatch, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  setSettingPlaceType,
  setPlaceInfo,
  setShouldAppearMap,
} from '../../actions/map'
import { Coords, ClickEventValue } from 'google-map-react'
import MapScreen from '../../components/screens/MapScreen'
import { googleByAxios } from '../../utilities/axios'
/// <reference types="googlemaps" />
type Geocoder = google.maps.Geocoder

type NameSearch = {
  inputValue: string
  setPlaceName: Dispatch<React.SetStateAction<string>>
  setLocation: Dispatch<React.SetStateAction<Coords>>
  setIsDisabled: Dispatch<React.SetStateAction<boolean>>
}

type LatLngSearch = {
  location: Coords
  setPlaceName: Dispatch<React.SetStateAction<string>>
  setIsDisabled: Dispatch<React.SetStateAction<boolean>>
}

const searchWithGeocoder = (
  arg: NameSearch | LatLngSearch // 場所名検索 or 緯度経度検索
) => {
  const Geocoder: Geocoder = new google.maps.Geocoder()
  arg.setIsDisabled(true)
  Geocoder.geocode(
    {
      address:
        'inputValue' in arg ? arg.inputValue : undefined,
      location:
        'location' in arg ? arg.location : undefined,
    },
    async (results, status) => {
      if (status == 'ZERO_RESULTS') {
        alert('見つかりません')
        arg.setIsDisabled(false)

        return
      }
      if (status !== 'OK') {
        console.log(status)
        alert('エラー発生')
        arg.setIsDisabled(false)

        return
      }
      const place = await googleByAxios.getPlaceName(
        results[0].place_id
      )

      // 場所名検索の時は緯度経度もセットする
      if ('setLocation' in arg) {
        const name = place.isSuccess
          ? place.result.name
          : arg.inputValue
        const lat = results[0].geometry.location.lat()
        const lng = results[0].geometry.location.lng()
        arg.setPlaceName(name)
        arg.setLocation({ lat, lng })
        console.log(name)
      } else {
        // 緯度経度検索の時
        const name = place.isSuccess
          ? place.result.name
          : ''
        arg.setPlaceName(name)
        console.log(name)
      }
      arg.setIsDisabled(false)
    }
  )
}

const MapScreenContainer: FC = () => {
  const dispatch = useDispatch()
  const center: Coords = {
    // 東京駅の座標
    lat: 35.68122839120453,
    lng: 139.7670679211538,
  }
  const zoom = 15 // 4.8にすると日本全体が見える
  const [isReady, setIsReady] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [location, setLocation] = useState<Coords>(center)
  const [placeName, setPlaceName] = useState<string>('')
  const [isDisabled, setIsDisabled] = useState<boolean>(
    false
  )

  const initGeocoder = () => {
    setIsReady(true)
    setPlaceName('東京駅')
  }

  const search = () => {
    if (!isReady || inputValue === '') return
    searchWithGeocoder({
      inputValue,
      setPlaceName,
      setLocation,
      setIsDisabled,
    })
  }

  const onPutPin = (v: ClickEventValue) => {
    const location: Coords = {
      lat: v.lat,
      lng: v.lng,
    }
    setLocation(location)
    searchWithGeocoder({
      location,
      setPlaceName,
      setIsDisabled,
    })
  }

  const hideMapScreen = () => {
    dispatch(setSettingPlaceType('cancel'))
    dispatch(
      setShouldAppearMap(false, {
        dateIndex: null,
        placeIndex: null,
      })
    )
  }

  const decidePlace = () => {
    if (isDisabled) return
    dispatch(
      setShouldAppearMap(false, {
        dateIndex: null,
        placeIndex: null,
      })
    )
    dispatch(
      setPlaceInfo(placeName, location.lat, location.lng)
    )
  }

  return (
    <MapScreen
      center={center}
      zoom={zoom}
      location={location}
      initGeocoder={initGeocoder}
      onPutPin={onPutPin}
      setInputValue={setInputValue}
      search={search}
      hideMapScreen={hideMapScreen}
      decidePlace={decidePlace}
      isDisabled={isDisabled}
    />
  )
}

export default MapScreenContainer
