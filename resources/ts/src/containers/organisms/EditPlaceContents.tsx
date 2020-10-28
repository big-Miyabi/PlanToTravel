import React, { FC, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Place, initialPlace } from '../../utilities/types'
import { RootState } from '../../reducers'
import { setSettingPlaceType } from '../../actions/map'
import EditPlaceContents from '../../components/organisms/EditPlaceContents'

type Props = {
  places: Place[]
  place: Place
  placeIndex: number
  dateIndex: number
  updateItinerary: () => void
}

const EditPlaceContentsContainer: FC<Props> = ({
  places,
  place,
  placeIndex,
  dateIndex,
  updateItinerary,
}) => {
  const dispatch = useDispatch()
  const { target, lat, lng, name } = useSelector(
    (state: RootState) => state.mapReducer
  )
  const setType = useSelector(
    (state: RootState) => state.mapReducer.setType
  )
  const [
    isChoosingLocation,
    setIsChoosingLocation,
  ] = useState<boolean>(false)

  // placesの内容を書き換える
  useEffect(() => {
    const initSettingPlaceType = () => {
      setIsChoosingLocation(false)
      dispatch(setSettingPlaceType('none'))
    }

    const rewritePlace = () => {
      place.name = name
      place.location = { lat, lng }
      updateItinerary()
    }

    const addPlace = () => {
      const date = place.date
      places.push({
        ...initialPlace,
        name,
        location: {
          lat,
          lng,
        },
        date,
      })
      updateItinerary()
    }

    const handleNewPlaceInfo = () => {
      if (
        target.dateIndex === dateIndex &&
        target.placeIndex === placeIndex
      ) {
        // 場所追加ボタンが押されたのが自分のコンポーネントだった時
        setIsChoosingLocation(true)

        return
      }

      if (!isChoosingLocation) return

      const place = places[placeIndex]
      if (setType === 'cancel') {
        initSettingPlaceType()

        return
      }
      if (place.name === null || setType === 'edit') {
        // 最初の場所 or 既存の場所を上書きする
        rewritePlace()
      } else if (setType === 'add') {
        // 場所を新規で追加した時
        addPlace()
      }
      initSettingPlaceType()
    }

    handleNewPlaceInfo()
  }, [target.dateIndex, target.placeIndex])

  return (
    <EditPlaceContents
      places={places}
      place={place}
      placeIndex={placeIndex}
      dateIndex={dateIndex}
      updateItinerary={updateItinerary}
    />
  )
}

export default EditPlaceContentsContainer
