import React, { FC, Dispatch, useState } from 'react'
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
}

const AddPlaceContainer: FC<Props> = ({
  places,
  setPlaces,
  dateIndex,
}) => {
  const dispatch = useDispatch()
  const { target, lat, lng, name } = useSelector(
    (state: RootState) => state.mapReducer
  )
  const [tempTarget, setTempTarget] = useState<Target>(
    initialTarget
  )

  const showMap = () => {
    dispatch(
      setShouldAppearMap(true, {
        dateIndex,
        placeIndex: 0,
      })
    )
  }

  console.log('hoge')

  return <AddPlace showMap={showMap} />
}

export default AddPlaceContainer
