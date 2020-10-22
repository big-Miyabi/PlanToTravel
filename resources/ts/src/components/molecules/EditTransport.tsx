import React, { FC } from 'react'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import {
  faWalking,
  faShoePrints,
} from '@fortawesome/free-solid-svg-icons'
import PlusInputBox from '../atoms/PlusInputBox'

type Props = {
  className: string
}

const EditTransport: FC<Props> = ({ className }) => {
  return (
    <div className={className + ' ' + 'edit-transposrt'}>
      <p className="edit-transposrt__title">
        <FontAwesomeIconBtn
          className="edit-transposrt__walking-icon"
          icon={faWalking}
        />
        移動手段を追加
      </p>
      <div className="edit-transposrt__select-transport">
        <div className="edit-transposrt__select-wrap">
          <FontAwesomeIconBtn
            className="edit-transposrt__shoe-prints-icon fa-rotate-90"
            icon={faShoePrints}
          />
          <p className="edit-transposrt__select-box">
            徒歩 ▾
          </p>
        </div>
        <p className="edit-transposrt__message">
          アイコンを選択してください
        </p>
      </div>
      <div className="edit-transposrt__detail-wrap">
        <PlusInputBox
          type="text"
          placeholder={'例）山手線　30分'}
          className="edit-transposrt__detail"
        />
      </div>
    </div>
  )
}

export default EditTransport
