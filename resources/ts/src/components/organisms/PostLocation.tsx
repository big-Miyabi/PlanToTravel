import React, { FC } from 'react'
import * as H from 'history'
import { colors } from '../../utilities/colors'
import EditPlace from '../../containers/molecules/EditPlace'
import EditPlaceDetail from '../../containers/organisms/EditPlaceDetail'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import FormBtn from '../atoms/FormBtn'
import MapIcon from '../atoms/svg/MapIcon'

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

        <EditPlace className="itinerary-edit__edit-place" />

        <EditPlaceDetail className="itinerary-edit__place-detail" />

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
