import React, { FC } from 'react'
import Header from '../containers/organisms/Header'
import Menu from '../components/organisms/Menu'
import ProgressBar from '../components/molecules/ProgressBar'
import PostOverview from '../containers/organisms/PostOverview'

const PostScreen: FC = () => {
  return (
    <div className="post-screen">
      <Header isPost={false} />
      <Menu />
      <ProgressBar />
      <PostOverview />
    </div>
  )
}

export default PostScreen
