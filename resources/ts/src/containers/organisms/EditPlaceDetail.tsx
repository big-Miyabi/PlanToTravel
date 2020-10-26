import React, {
  FC,
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  Dispatch,
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

const useTextArea = (
  place: Place
): [string, Dispatch<React.SetStateAction<string>>] => {
  const [text, setText] = useState<string>('')
  useEffect(() => {
    place.comment = text
  }, [text])

  return [text, setText]
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
  const [text, setText] = useTextArea(places[placeIndex])

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
    />
  )
}

export default EditPlaceDetailContainer
