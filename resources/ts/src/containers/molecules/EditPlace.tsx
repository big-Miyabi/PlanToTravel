import React, { FC, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setShouldAppearMap } from '../../actions/map'
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
  const setCustomName = (value: string) => {
    places[placeIndex].name = value
  }

  useEffect(() => {
    ;(() => { // eslint-disable-line
      const input = inputRef.current
      const name = places[placeIndex].name
      if (input === null || name === null) return
      input.value = name
    })()
  }, [places[placeIndex]])

  const showMap = () => {
    dispatch(
      setShouldAppearMap(true, {
        dateIndex,
        placeIndex,
      })
    )
  }

  return (
    <EditPlace
      className={className}
      inputRef={inputRef}
      setCustomName={setCustomName}
      showMap={showMap}
    />
  )
}

export default EditPlaceContainer
