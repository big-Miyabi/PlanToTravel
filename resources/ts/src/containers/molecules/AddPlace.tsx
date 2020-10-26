import React, {
  FC,
  Dispatch,
  useState,
  useEffect,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShouldAppearMap } from '../../actions/map'
import {
  Target,
  Place,
  initialTarget,
} from '../../utilities/types'
import { RootState } from '../../reducers'
import AddPlace from '../../components/molecules/AddPlace'

type Props = {
  places: Place[]
  setPlaces: Dispatch<React.SetStateAction<Place[]>>
  dateIndex: number
  placeIndex: number
}

const AddPlaceContainer: FC<Props> = ({
  places,
  setPlaces,
  dateIndex,
  placeIndex,
}) => {
  const dispatch = useDispatch()
  const { target, lat, lng, name } = useSelector(
    (state: RootState) => state.mapReducer
  )
  const [
    isChoosingLocation,
    setIsChoosingLocation,
  ] = useState<boolean>(false)

  // placesの内容を書き換える
  useEffect(() => {
    ;(() => { // eslint-disable-line
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
      if (place.name === null) {
        place.name = name
        place.location = { lat, lng }
        setPlaces(places.slice())
        console.log('ok!')
        console.log(name)
      } else if (place.name) {
        places.push({
          name,
          location: {
            lat,
            lng,
          },
        })
        setPlaces(places.slice())
      }
      setIsChoosingLocation(false)
    })()
  }, [target.dateIndex, target.placeIndex])

  const showMap = () => {
    dispatch(
      setShouldAppearMap(true, {
        dateIndex,
        placeIndex,
      })
    )
  }

  return <AddPlace showMap={showMap} />
}

export default AddPlaceContainer
