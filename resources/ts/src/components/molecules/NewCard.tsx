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

const NewCard: FC<Props> = ({ post }) => {
  const goTostyle = post.hasGoTo ? {} : { display: 'none' }
  const bgStyle = {
    backgroundImage: 'url(' + post.header + ')',
  }

  return (
    <div className="new-card" style={bgStyle}>
      <div style={goTostyle}>
        <GoToLogo className="new-card__go-to" />
      </div>
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
      <ItineraryInCard
        className="new-card__itinerary"
        itinerary={post.itinerary}
      />
    </div>
  )
}

export default NewCard
