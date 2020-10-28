import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import {
  setShouldAppearMap,
  setSettingPlaceType,
} from '../../actions/map'
import AddPlace from '../../components/molecules/AddPlace'

type Props = {
  dateIndex: number
  placeIndex: number
}

const AddPlaceContainer: FC<Props> = ({
  dateIndex,
  placeIndex,
}) => {
  const dispatch = useDispatch()

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
