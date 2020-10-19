import React, { FC } from 'react'
import Header from '../containers/organisms/Header'
import Menu from '../components/organisms/Menu'
import PopularPosts from '../containers/organisms/PopularPosts'

const HomeScreen: FC = () => {
  return (
    <div className="home">
      <Header />
      <Menu />
      <PopularPosts />
      {/* <NewPosts />
      <PostBtn /> */}
    </div>
  )
}

export default HomeScreen
