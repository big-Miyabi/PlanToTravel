import React, { FC } from 'react'
import * as H from 'history'
import { colors } from '../../utilities/colors'
import DashedCircle from '../atoms/svg/DashedCircle'
import BadFace from '../atoms/svg/BadFace'
import SosoFace from '../atoms/svg/SosoFace'
import GoodFace from '../atoms/svg/GoodFace'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import {
  faSun,
  faCloud,
  faUmbrella,
  faSnowflake,
  faMoon,
  faWalking,
  faShoePrints,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import InputBox from '../atoms/InputBox'
import FormBtn from '../atoms/FormBtn'
import MapIcon from '../atoms/svg/MapIcon'
import CommentArea from '../molecules/CommentArea'
import PlusImage from '../atoms/svg/PlusImage'

type Props = {
  history: H.History
}

const PostLocation: FC<Props> = ({ history }) => {
  return (
    <div className="post-location">
      <h2 className="post-location__h2">行程*</h2>

      <div className="itinerary-edit">
        <div className="itinerary-edit__date-wrap">
          <div className="itinerary-edit__date-border"></div>
          <p className="itinerary-edit__date">2020.10.06</p>
        </div>

        <div className="itinerary-edit__edit-place">
          <MapIcon
            className="itinerary-edit__map-icon"
            shouldHavePlus={false}
            color={colors.navyBlue}
          />
          <InputBox
            type="text"
            className="itinerary-edit__place-input"
          />
          <FontAwesomeIconBtn
            className="itinerary-edit__whether--sun"
            icon={faSun}
          />
          <DashedCircle className="itinerary-edit__rating" />
        </div>

        <div className="itinerary-edit__place-detail-wrap">
          <div className="itinerary-edit__left-border"></div>

          <div className="itinerary-edit__right-detai">
            <div className="itinerary-edit__add-image-wrap">
              <PlusImage className="itinerary-edit__add-image" />
              <p>タップして写真を追加</p>
            </div>

            <CommentArea maxLength={255} />

            <div className="itinerary-edit__transport-wrap">
              <p className="itinerary-edit__transport-title">
                <FontAwesomeIconBtn
                  className="itinerary-edit__walking-icon"
                  icon={faWalking}
                />
                移動手段を追加
              </p>
              <div className="itinerary-edit__select-transport">
                <FontAwesomeIconBtn
                  className="itinerary-edit__shoe-prints-icon"
                  icon={faShoePrints}
                />
                <p className="itinerary-edit__select-box">
                  徒歩 ▾
                </p>
                <p className="itinerary-edit__transport-message">
                  アイコンを選択してください
                </p>
              </div>
              <div className="itinerary-edit__transport-detail-wrap">
                <InputBox
                  type="text"
                  placeholder={'例）山手線　30分'}
                  className="itinerary-edit__transport-detail"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="itinerary-edit__add-place">
          <MapIcon
            className="itinerary-edit__map-icon"
            shouldHavePlus={false}
            color={colors.navyBlue}
          />
          <p>場所を追加</p>
          <FontAwesomeIconBtn
            className="itinerary-edit__plus"
            icon={faPlus}
          />
        </div>
      </div>

      <div className="post-location__btn-wrap">
        <FormBtn
          className="post-location__return"
          name="戻る"
          onClick={() => {}} // eslint-disable-line
        />
        <FormBtn
          className="post-location__next"
          name="次へ"
          onClick={() => {}} // eslint-disable-line
        />
      </div>
    </div>
  )
}

export default PostLocation
