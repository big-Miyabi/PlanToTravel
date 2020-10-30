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

const PopularCard: FC<Props> = ({
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
      className="popular-card"
      onClick={() => {
        history.push(`/itinerary/${post.id}`)
      }}
    >
      <div className="popular-card__wrap" style={bgStyle}>
        <div style={goTostyle}>
          <GoToLogo className="popular-card__go-to" />
        </div>

        <div className="popular-card__right-wrap">
          <div className="popular-card__itinerary-wrap">
            <ItineraryInCard
              className="popular-card__itinerary"
              itinerary={post.itinerary}
              gradientId={gradientId}
            />
          </div>

          <div className="popular-card__icon-wrap">
            <div
              className="popular-card__bookmark-wrap"
              onClick={(e) => {
                e.stopPropagation()
                onClickBookmark()
              }}
            >
              <FontAwesomeIconBtn
                className={
                  'popular-card__bookmark' +
                  (isMeBookmarked ? '--added' : '--none')
                }
                icon={faBookmark}
              />
            </div>
            <div
              className="popular-card__favorite"
              onClick={(e) => {
                e.stopPropagation()
                onClickHeart()
              }}
            >
              <FontAwesomeIconBtn
                className="popular-card__favorite-btn"
                icon={
                  isMeLover ? tintedHeart : outlineHeart
                }
              />
              <p className="popular-card__favorite-number">
                {isMeLover ? likes + 1 : likes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularCard
