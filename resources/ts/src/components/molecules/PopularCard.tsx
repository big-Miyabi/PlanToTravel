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
}

const PopularCard: FC<Props> = ({ post }) => {
  const goTostyle = post.hasGoTo ? {} : { display: 'none' }
  const bgStyle = {
    backgroundImage: 'url(' + post.header + ')',
  }

  return (
    <div className="popular-card" style={bgStyle}>
      <div style={goTostyle}>
        <GoToLogo className="popular-card__go-to" />
      </div>
      <FontAwesomeIconBtn
        className="popular-card__bookmar"
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
      <ItineraryInCard
        className="popular-card__itineray"
        itinerary={post.itinerary}
      />
    </div>
  )
}

export default PopularCard
