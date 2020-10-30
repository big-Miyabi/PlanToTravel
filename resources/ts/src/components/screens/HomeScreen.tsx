import React, { FC } from 'react'
import { RouteComponentProps as Props } from 'react-router-dom'
import { colors } from '../../utilities/colors'
import Header from '../../containers/organisms/Header'
import Menu from '../../components/organisms/Menu'
import PopularPosts from '../../containers/organisms/PopularPosts'
import NewPosts from '../../containers/organisms/NewPosts'
import MapIcon from '../../components/atoms/svg/MapIcon'

const HomeScreen: FC<Props> = (props) => {
  const onClick = () => {
    props.history.push('../post/overview')
  }

  return (
    <div className="home-screen">
      <Header />
      <Menu />
      <PopularPosts history={props.history} />
      <NewPosts history={props.history} />
      <MapIcon
        className="home-screen__map-icon"
        color={colors.yellow}
        onClick={onClick}
      />
    </div>
  )
}

export default HomeScreen
