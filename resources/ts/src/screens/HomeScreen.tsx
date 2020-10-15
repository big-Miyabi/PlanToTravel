import React, { FC } from 'react'
import Header from '../containers/organisms/Header'
import UserMenu from '../containers/organisms/UserMenu'

const HomeScreen: FC = () => {
  return (
    <div className="home">
      <Header />
      <UserMenu />
      {/* <PopularPosts />
      <NewPosts />
      <PostBtn /> */}
    </div>
  )
}

export default HomeScreen
