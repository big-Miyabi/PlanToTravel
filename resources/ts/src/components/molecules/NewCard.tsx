import React, { FC } from 'react'
import GoToLogo from '../atoms/svg/GoToLogo'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import ItineraryInCard from '../molecules/ItineraryInCard'
import {
  faHeart,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons'
import { PostCardType } from '../../utilities/types'

type Props = {
  post: PostCardType
  gradientId: string
  likes: number
  isMeLover: boolean
  onClickHeart: () => void
  isMeBookmarked: boolean
  onClickBookmark: () => void
}

const NewCard: FC<Props> = ({
  post,
  gradientId,
  likes,
  isMeLover,
  onClickHeart,
  isMeBookmarked,
  onClickBookmark,
}) => {
  const goTostyle = post.hasGoTo ? {} : { display: 'none' }
  const url = post.header
    ? post.header
    : '../images/ninki_listimg_bg.png'
  const bgStyle = {
    backgroundImage: 'url(' + url + ')',
  }

  return (
    <div className="new-card">
      <div
        className="new-card__go-to-wrap"
        style={goTostyle}
      >
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
        <div
          className="new-card__icon-wrap"
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
          <div
            className="new-card__favorite"
            onClick={(e) => {
              e.stopPropagation()
              onClickHeart()
            }}
          >
            <FontAwesomeIconBtn
              className="new-card__favorite-btn"
              icon={faHeart}
            />
            <p className="new-card__favorite-number">
              {post.likes}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewCard
