import React, { FC, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setShouldAppearMap,
  setSettingPlaceType,
} from '../../actions/map'
import { Place, initialPlace } from '../../utilities/types'
import { RootState } from '../../reducers'
import AddPlace from '../../components/molecules/AddPlace'

type Props = {
  places: Place[]
  updateItinerary: () => void
  dateIndex: number
  placeIndex: number
}

const AddPlaceContainer: FC<Props> = ({
  places,
  updateItinerary,
  dateIndex,
  placeIndex,
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
    (() => { // eslint-disable-line
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
      if (place.name === null || setType === 'edit') {
        // 最初の場所 or 既存の場所を上書きする
        place.name = name
        place.location = { lat, lng }
        updateItinerary()
      } else if (setType === 'add') {
        // 場所を新規で追加した時
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
      setIsChoosingLocation(false)
      dispatch(setSettingPlaceType('none'))
    })()
  }, [target.dateIndex, target.placeIndex])

  const showMap = () => {
    dispatch(
      setShouldAppearMap(true, {
        dateIndex,
        placeIndex,
      })
    )
    dispatch(setSettingPlaceType('add'))
  }

  return <AddPlace showMap={showMap} />
}

export default AddPlaceContainer
