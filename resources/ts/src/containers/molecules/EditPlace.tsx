import React, {
  FC,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useDispatch } from 'react-redux'
import {
  setShouldAppearMap,
  setSettingPlaceType,
} from '../../actions/map'
import { Place } from '../../utilities/types'
import EditPlace from '../../components/molecules/EditPlace'

type Props = {
  className: string
  places: Place[]
  dateIndex: number
  placeIndex: number
}

const EditPlaceContainer: FC<Props> = ({
  className,
  places,
  dateIndex,
  placeIndex,
}) => {
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
  const [
    shouldShowWhetherBox,
    setShouldShowWhetherBox,
  ] = useState<boolean>(false)
  const setCustomName = (value: string) => {
    places[placeIndex].name = value
  }

  // input.valueの中身を書き換える
  useEffect(() => {
    ;(() => { // eslint-disable-line
      const input = inputRef.current
      const name = places[placeIndex].name
      if (input === null || name === null) return
      input.value = name
    })()
  }, [places[placeIndex].name])

  const showMap = () => {
    dispatch(
      setShouldAppearMap(true, {
        dateIndex,
        placeIndex,
      })
    )
    dispatch(setSettingPlaceType('edit'))
  }

  return (
    <EditPlace
      className={className}
      inputRef={inputRef}
      setCustomName={setCustomName}
      showMap={showMap}
      shouldShowWhetherBox={shouldShowWhetherBox}
      setShouldShowWhetherBox={setShouldShowWhetherBox}
    />
  )
}

export default EditPlaceContainer
