import React, { FC } from 'react'
import * as H from 'history'
import GoToLogo from '../atoms/svg/GoToLogo'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import ItineraryInCard from '../molecules/ItineraryInCard'
import {
  faHeart as tintedHeart,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons'
import { faHeart as outlineHeart } from '@fortawesome/free-regular-svg-icons'
import { PostCardType } from '../../utilities/types'

type Props = {
  post: PostCardType
  gradientId: string
  likes: number
  isMeLover: boolean
  onClickHeart: () => void
  isMeBookmarked: boolean
  onClickBookmark: () => void
  history: H.History
}

const NewCard: FC<Props> = ({
  post,
  gradientId,
  likes,
  isMeLover,
  onClickHeart,
  isMeBookmarked,
  onClickBookmark,
  history,
}) => {
  const goTostyle = post.hasGoTo ? {} : { display: 'none' }
  const url = post.header
    ? post.header
    : '../images/ninki_listimg_bg.png'
  const bgStyle = {
    backgroundImage: 'url(' + url + ')',
  }

  return (
    <div
      className="new-card"
      onClick={() => {
        history.push(`/itinerary/${post.id}`)
      }}
    >
      <div
        className="new-card__go-to-wrap"
        style={goTostyle}
      >
        ]
        <GoToLogo className="new-card__go-to" />
      </div>
      <div className="new-card__wrap" style={bgStyle}>
        <div className="new-card__itinerary-wrap">
          <ItineraryInCard
            className="new-card__itinerary"
            itinerary={post.itinerary}
            gradientId={gradientId}
          />
        </div>
        <div className="new-card__icon-wrap">
          <div
            className="new-card__bookmark-wrap"
            onClick={(e) => {
              e.stopPropagation()
              onClickBookmark()
            }}
          >
            <FontAwesomeIconBtn
              className={
                'new-card__bookmark' +
                (isMeBookmarked ? '--added' : '--none')
              }
              icon={faBookmark}
            />
          </div>
          <div
            className="new-card__favorite"
            onClick={(e) => {
              e.stopPropagation()
              onClickHeart()
            }}
          >
            <FontAwesomeIconBtn
              className="new-card__favorite-btn"
              icon={isMeLover ? tintedHeart : outlineHeart}
            />
            <p className="new-card__favorite-number">
              {isMeLover ? likes + 1 : likes}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewCard
