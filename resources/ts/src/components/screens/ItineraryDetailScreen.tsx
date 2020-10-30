import React, { FC, Dispatch } from 'react'
import { Place } from '../../utilities/types'
import Header from '../../containers/organisms/Header'
import Menu from '../../components/organisms/Menu'
import ItineraryFirstView from '../molecules/ItineraryFirstView'
import Itinerary from '../organisms/Itinerary'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import {
  faShareSquare,
  faHeart as tintedHeart,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons'
import { faHeart as outlineHeart } from '@fortawesome/free-regular-svg-icons'

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
  setIsMeLover: Dispatch<React.SetStateAction<boolean>>
  isMeBookmarked: boolean
  setIsMeBookmarked: Dispatch<React.SetStateAction<boolean>>
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
  setIsMeLover,
  isMeBookmarked,
  setIsMeBookmarked,
}) => {
  return (
    <div className="itinerary-detail">
      <Header isPost={true} />
      <Menu />

      {itinerary ? (
        <>
          <ItineraryFirstView
            isDetail={true}
            username={username}
            icon={icon}
            src={headerUrl}
            title={title}
            dateS={dateS}
            dateF={dateF}
            people={people}
            tags={tags}
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
              onClick={() => {
                setIsMeLover(!isMeLover)
              }}
            >
              <FontAwesomeIconBtn
                className="itinerary-detail__icon--heart"
                icon={
                  isMeLover ? tintedHeart : outlineHeart
                }
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
              onClick={() => {
                setIsMeBookmarked(!isMeBookmarked)
              }}
            >
              <FontAwesomeIconBtn
                className="itinerary-detail__icon--bookmark"
                icon={faBookmark}
              />
            </div>
          </div>

          <div className="itinerary-detail__content-wrap">
            <h2 className="itinerary-detail__h2">行程</h2>
            <Itinerary itineraryInfo={itinerary} />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default ItineraryDetailScreen
