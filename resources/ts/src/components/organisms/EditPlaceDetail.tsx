import React, { FC } from 'react'

import CommentArea from '../molecules/CommentArea'
import PlusImage from '../atoms/svg/PlusImage'
import EditTransport from '../../containers/molecules/EditTransport'

type Props = {
  className: string
}

const EditPlaceDetail: FC<Props> = ({ className }) => {
  return (
    <div className={className + ' ' + 'edit-place-detail'}>
      <div className="edit-place-detail__left"></div>

      <div className="edit-place-detail__right">
        <div className="edit-place-detail__plus-img-wrap">
          <PlusImage className="edit-place-detail__plus-img" />
          <p className="edit-place-detail__plus-img-text">
            タップして写真を追加
          </p>
        </div>

        <CommentArea maxLength={255} />

        <EditTransport className="edit-place-detail__transport" />
      </div>
    </div>
  )
}

export default EditPlaceDetail
