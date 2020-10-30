import React, { FC } from 'react'
import Header from '../../containers/organisms/Header'
import Menu from '../../components/organisms/Menu'
import ItineraryFirstView from '../molecules/ItineraryFirstView'
import { Place } from '../../utilities/types'

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
}) => {
  return (
    <div className="itinerary-detail">
      <Header isPost={true} />
      <Menu />
      {itinerary ? (
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
      ) : (
        <></>
      )}
    </div>
  )
}

export default ItineraryDetailScreen
