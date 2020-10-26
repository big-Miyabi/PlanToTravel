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
  const [tempTarget, setTempTarget] = useState<Target>(
    initialTarget
  )
  const [
    isChoosingLocation,
    setIsChoosingLocation,
  ] = useState<boolean>(false)

  useEffect(() => {
    ;(() => { // eslint-disable-line
      if (
        target.dateIndex === dateIndex &&
        target.placeIndex === placeIndex
      ) {
        setIsChoosingLocation(true)

        return
      }
      if (isChoosingLocation) {
        places[placeIndex].name = name
        places[placeIndex].location = { lat, lng }
        setPlaces(places.slice())
        console.log('ok!')
        console.log(name)
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
