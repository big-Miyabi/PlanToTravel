import React, { FC } from 'react'
import * as H from 'history'
import { colors } from '../../utilities/colors'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import {
  faSun,
  faCloud,
  faUmbrella,
  faSnowflake,
  faMoon,
} from '@fortawesome/free-solid-svg-icons'
import InputBox from '../atoms/InputBox'
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

        <div className="itinerary-edit__place-row-wrap">
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
        </div>
      </div>

      <div className="post-location__btn-wrap">
        <FormBtn
          className="post-location__return"
          name="戻る"
          onClick={() => {}}
        />
        <FormBtn
          className="post-location__next"
          name="次へ"
          onClick={() => {}}
        />
      </div>
    </div>
  )
}

export default PostLocation
