import React, { FC, Dispatch } from 'react'
import { Place } from '../../utilities/types'
import Header from '../../containers/organisms/Header'
import Menu from '../../components/organisms/Menu'
import ItineraryFirstView from '../molecules/ItineraryFirstView'
import Itinerary from '../organisms/Itinerary'
import EditIcon from '../atoms/svg/EditIcon'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import {
  faShareSquare,
  faHeart as tintedHeart,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons'
import { faHeart as outlineHeart } from '@fortawesome/free-regular-svg-icons'
import { colors } from '../../utilities/colors'

type Props = {
  itinerary: Place[][] | null
  username: string
  icon: string
  headerUrl: string
  title: string
  dateS: string
  dateF: string
  people: number
  tags: string[]
  likes: number
  isMeLover: boolean
  onClickHeart: () => void
  isMeBookmarked: boolean
  onClickBookmark: () => void
  isPoster: boolean
}

const ItineraryDetailScreen: FC<Props> = ({
  itinerary,
  username,
  icon,
  headerUrl,
  title,
  dateS,
  dateF,
  people,
  tags,
  likes,
  isMeLover,
  onClickHeart,
  isMeBookmarked,
  onClickBookmark,
  isPoster,
}) => {
  return (
    <div className="itinerary-detail">
      <Header isPost={true} />
      <Menu />

      <ItineraryFirstView
        isDetail={true}
        username={itinerary ? username : ''}
        icon={itinerary ? icon : ''}
        src={itinerary ? headerUrl : ''}
        title={itinerary ? title : ''}
        dateS={itinerary ? dateS : ''}
        dateF={itinerary ? dateF : ''}
        people={itinerary ? people : 1}
        tags={itinerary ? tags : []}
      />

      <div className="itinerary-detail__tab-wrap">
        <div className="itinerary-detail__tab--share">
          <FontAwesomeIconBtn
            className="itinerary-detail__icon--share"
            icon={faShareSquare}
          />
        </div>
        <div className="itinerary-detail__border"></div>
        <div
          className="itinerary-detail__tab--heart"
          onClick={onClickHeart}
        >
          <FontAwesomeIconBtn
            className="itinerary-detail__icon--heart"
            icon={isMeLover ? tintedHeart : outlineHeart}
          />
          <p className="itinerary-detail__likes">
            {isMeLover ? likes + 1 : likes}
          </p>
        </div>
        <div className="itinerary-detail__border"></div>
        <div
          className={
            'itinerary-detail__tab--' +
            (isMeBookmarked
              ? 'bookmarked'
              : 'non-bookmarked')
          }
          onClick={onClickBookmark}
        >
          <FontAwesomeIconBtn
            className="itinerary-detail__icon--bookmark"
            icon={faBookmark}
          />
        </div>
      </div>

      <div className="itinerary-detail__content-wrap">
        <h2 className="itinerary-detail__h2">行程</h2>
        {itinerary ? (
          <Itinerary itineraryInfo={itinerary} />
        ) : (
          <></>
        )}
      </div>

      <div
        className={
          'itinerary-detail__fixed-wrap' +
          (isPoster ? '--edit' : '--heart')
        }
        onClick={() => {
          if (!isPoster) onClickHeart
        }}
      >
        {isPoster ? (
          <EditIcon
            className="itinerary-detail__icon--edit"
            color={colors.lightBlue}
          />
        ) : (
          <FontAwesomeIconBtn
            className="itinerary-detail__icon--heart"
            icon={isMeLover ? tintedHeart : outlineHeart}
          />
        )}
      </div>
    </div>
  )
}

export default ItineraryDetailScreen
