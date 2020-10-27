import React, { FC } from 'react'
import { Place } from '../../utilities/types'
import EditPlaceDetail from '../../components/organisms/EditPlaceDetail'
import {
  useFileInput,
  useRewritePlace,
} from '../../utilities/customHook'

type Props = {
  className: string
  places: Place[]
  dateIndex: number
  placeIndex: number
}

const EditPlaceDetailContainer: FC<Props> = ({
  className,
  places,
  dateIndex,
  placeIndex,
}) => {
  const inputId = `add_place_image_${dateIndex}_${placeIndex}`
  const [
    inputRef,
    src,
    onFileChange,
    deleteImage,
  ] = useFileInput((file: File) => {
    places[placeIndex].image = file
  })

  const [text, setText] = useRewritePlace<string>(
    '',
    (state) => {
      places[placeIndex].comment = state
    }
  )

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
    />
  )
}

export default EditPlaceDetailContainer
