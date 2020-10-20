import React, { FC } from 'react'
import Header from '../containers/organisms/Header'
import Menu from '../components/organisms/Menu'
import PopularPosts from '../containers/organisms/PopularPosts'
import NewPosts from '../containers/organisms/NewPosts'

const HomeScreen: FC = () => {
  return (
    <div className="home-screen">
      <Header />
      <Menu />
      <PopularPosts />
      <NewPosts />
      {/* <PostBtn /> */}
    </div>
  )
}

export default HomeScreen
