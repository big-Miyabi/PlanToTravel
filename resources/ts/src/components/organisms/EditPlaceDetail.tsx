import React, { FC, ChangeEvent } from 'react'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import CommentArea from '../molecules/CommentArea'
import PlusImage from '../atoms/svg/PlusImage'
import EditTransport from '../../containers/molecules/EditTransport'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

type Props = {
  className: string
  inputId: string
  inputRef: React.RefObject<HTMLInputElement>
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void
  src: string
  placeName: string | null
  deleteImage: () => void
}

const EditPlaceDetail: FC<Props> = ({
  className,
  inputId,
  inputRef,
  onFileChange,
  src,
  placeName,
  deleteImage,
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

        <CommentArea maxLength={255} />

        <EditTransport className="edit-place-detail__transport" />
      </div>
    </div>
  )
}

export default EditPlaceDetail
