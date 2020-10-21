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

const NewCard: FC<Props> = ({ post, gradientId }) => {
  const goTostyle = post.hasGoTo ? {} : { display: 'none' }
  const bgStyle = {
    backgroundImage: 'url(' + post.header + ')',
  }

  return (
    <div className="new-card" style={bgStyle}>
      <div style={goTostyle}>
        <GoToLogo className="new-card__go-to" />
      </div>
      <div className="new-card__wrap-itineraryicon">
        <ItineraryInCard
          className="new-card__itinerary"
          itinerary={post.itinerary}
          gradientId={gradientId}
        />
        <div className="new-card__icon-wrap">
          <FontAwesomeIconBtn
            className="new-card__bookmark"
            icon={faBookmark}
          />
          <div className="new-card__favorite">
            <FontAwesomeIconBtn
              className="new-card__favorite-btn"
              icon={faHeart}
            />
            <p className="new-card__favorite-number">
              {post.favNum}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewCard
