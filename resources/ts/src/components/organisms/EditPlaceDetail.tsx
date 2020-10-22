import React, { FC } from 'react'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import {
  faWalking,
  faShoePrints,
} from '@fortawesome/free-solid-svg-icons'
import PlusInputBox from '../atoms/PlusInputBox'
import CommentArea from '../molecules/CommentArea'
import PlusImage from '../atoms/svg/PlusImage'

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
          <p>タップして写真を追加</p>
        </div>

        <CommentArea maxLength={255} />

        <div className="edit-place-detail__transport-wrap">
          <p className="edit-place-detail__transport-title">
            <FontAwesomeIconBtn
              className="edit-place-detail__walking-icon"
              icon={faWalking}
            />
            移動手段を追加
          </p>
          <div className="edit-place-detail__select-transport">
            <FontAwesomeIconBtn
              className="edit-place-detail__shoe-prints-icon"
              icon={faShoePrints}
            />
            <p className="edit-place-detail__select-box">
              徒歩 ▾
            </p>
            <p className="edit-place-detail__transport-message">
              アイコンを選択してください
            </p>
          </div>
          <div className="edit-place-detail__transport-detail-wrap">
            <PlusInputBox
              type="text"
              placeholder={'例）山手線　30分'}
              className="edit-place-detail__transport-detail"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditPlaceDetail
