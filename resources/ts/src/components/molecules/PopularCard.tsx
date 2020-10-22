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
}

const PopularCard: FC<Props> = ({ post, gradientId }) => {
  const goTostyle = post.hasGoTo ? {} : { display: 'none' }
  const bgStyle = {
    backgroundImage: 'url(' + post.header + ')',
  }

  return (
    <div className="popular-card">
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
            <FontAwesomeIconBtn
              className="popular-card__bookmark"
              icon={faBookmark}
            />
            <div className="popular-card__favorite">
              <FontAwesomeIconBtn
                className="popular-card__favorite-btn"
                icon={faHeart}
              />
              <p className="popular-card__favorite-number">
                {post.favNum}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularCard
