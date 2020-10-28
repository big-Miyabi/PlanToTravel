import React, { FC, ChangeEvent, Dispatch } from 'react'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import CommentArea from '../molecules/CommentArea'
import PlusImage from '../atoms/svg/PlusImage'
import EditTransport from '../../containers/molecules/EditTransport'
import {
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { Place } from '../../utilities/types'

type Props = {
  className: string
  inputId: string
  inputRef: React.RefObject<HTMLInputElement>
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void
  src: string
  placeName: string | null
  deleteImage: () => void
  text: string
  setText: Dispatch<React.SetStateAction<string>>
  dateIndex: number
  placeIndex: number
  places: Place[]
  deletePlace: () => void
}

const EditPlaceDetail: FC<Props> = ({
  className,
  inputId,
  inputRef,
  onFileChange,
  src,
  placeName,
  deleteImage,
  text,
  setText,
  dateIndex,
  placeIndex,
  places,
  deletePlace,
}) => {
  return (
    <div className={className + ' ' + 'edit-place-detail'}>
      <div className="edit-place-detail__left"></div>

      <div className="edit-place-detail__right">
        <label
          className="edit-place-detail__plus-img-wrap"
          htmlFor={inputId}
        >
          <PlusImage className="edit-place-detail__plus-img" />
          <p className="edit-place-detail__plus-img-text">
            タップして写真を{src ? '変更' : '追加'}
          </p>
          <input
            id={inputId}
            type="file"
            accept="image/jpeg"
            style={{ display: 'none' }}
            onChange={onFileChange}
            ref={inputRef}
          />
        </label>

        {src && placeName ? (
          <div className="edit-place-detail__image-wrap">
            <img
              className="edit-place-detail__image"
              src={src}
              alt={placeName}
            />
            <FontAwesomeIconBtn
              className="edit-place-detail__delete-image"
              icon={faTimes}
              onClick={deleteImage}
            />
          </div>
        ) : (
          <></>
        )}

        <CommentArea
          maxLength={255}
          length={text.length}
          onChange={(
            e: ChangeEvent<HTMLTextAreaElement>
          ) => {
            e.persist()
            setText(e.target.value)
          }}
        />

        <EditTransport
          className="edit-place-detail__transport"
          dateIndex={dateIndex}
          placeIndex={placeIndex}
          places={places}
        />

        <div
          className="edit-place-detail__delete-place-wrap"
          onClick={deletePlace}
        >
          <FontAwesomeIconBtn
            className="edit-place-detail__trash-iocn"
            icon={faTrash}
          />
          <p className="edit-place-detail__delete-place">
            この場所を削除
          </p>
        </div>
      </div>
    </div>
  )
}

export default EditPlaceDetail
