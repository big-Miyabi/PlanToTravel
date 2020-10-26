import React, { FC, useEffect, useRef } from 'react'
import { Place } from '../../utilities/types'
import EditPlace from '../../components/molecules/EditPlace'

type Props = {
  className: string
  places: Place[]
  index: number
}

const EditPlaceContainer: FC<Props> = ({
  className,
  places,
  index,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const setCustomName = (value: string) => {
    places[index].name = value
  }

  useEffect(() => {
    ;(() => { // eslint-disable-line
      const input = inputRef.current
      const name = places[index].name
      if (input === null || name === null) return
      input.value = name
    })()
  }, [places[index]])

  return (
    <EditPlace
      className={className}
      inputRef={inputRef}
      setCustomName={setCustomName}
    />
  )
}

export default EditPlaceContainer
