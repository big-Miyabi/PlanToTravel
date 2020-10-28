import React, { FC } from 'react'
import { initialPlace, Place } from '../../utilities/types'
import EditPlaceDetail from '../../components/organisms/EditPlaceDetail'
import {
  useFileInput,
  useHooks,
} from '../../utilities/customHook'

type Props = {
  className: string
  places: Place[]
  dateIndex: number
  placeIndex: number
  updateItinerary: () => void
}

const EditPlaceDetailContainer: FC<Props> = ({
  className,
  places,
  dateIndex,
  placeIndex,
  updateItinerary,
}) => {
  const inputId = `add_place_image_${dateIndex}_${placeIndex}`
  const [
    inputRef,
    src,
    onFileChange,
    deleteImage,
  ] = useFileInput((src: string) => {
    places[placeIndex].image = src
  })

  const [text, setText] = useHooks<string>('', (state) => {
    places[placeIndex].comment = state
  })

  const deletePlace = () => {
    if (places.length === 1) {
      const date = places[placeIndex].date
      const initialPlaceByValue = {
        ...initialPlace,
        date,
      }
      places[placeIndex] = initialPlaceByValue
    } else {
      places.splice(placeIndex, 1)
    }

    updateItinerary()
  }

  return (
    <EditPlaceDetail
      className={className}
      inputId={inputId}
      inputRef={inputRef}
      onFileChange={onFileChange}
      src={src}
      placeName={places[placeIndex].name}
      deleteImage={deleteImage}
      text={text}
      setText={setText}
      dateIndex={dateIndex}
      placeIndex={placeIndex}
      places={places}
      deletePlace={deletePlace}
    />
  )
}

export default EditPlaceDetailContainer
