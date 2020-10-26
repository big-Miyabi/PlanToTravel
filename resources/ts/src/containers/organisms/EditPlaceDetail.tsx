import React, {
  FC,
  useState,
  useRef,
  ChangeEvent,
} from 'react'
import { Place } from '../../utilities/types'
import EditPlaceDetail from '../../components/organisms/EditPlaceDetail'
import { useFileInput } from '../../utilities/customHook'

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

  return (
    <EditPlaceDetail
      className={className}
      inputId={inputId}
      inputRef={inputRef}
      onFileChange={onFileChange}
      src={src}
      placeName={places[placeIndex].name}
      deleteImage={deleteImage}
    />
  )
}

export default EditPlaceDetailContainer
