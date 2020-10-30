import React, { FC } from 'react'
import Header from '../../containers/organisms/Header'
import Menu from '../../components/organisms/Menu'

const ItineraryDetailScreen: FC = () => {
  return (
    <div className="itinerary-detail">
      <Header isPost={true} />
      <Menu />
    </div>
  )
}

export default ItineraryDetailScreen
