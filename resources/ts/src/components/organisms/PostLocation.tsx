import React, { FC } from 'react'
import * as H from 'history'
import FormBtn from '../atoms/FormBtn'
import EditItinerary from '../../containers/organisms/EditItinerary'

type Props = {
  history: H.History
}

const PostLocation: FC<Props> = ({ history }) => {
  return (
    <div className="post-location">
      <h2 className="post-location__h2">行程*</h2>

      <EditItinerary
        className="post-location__edit-itinerary"
        history={history}
      />

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
