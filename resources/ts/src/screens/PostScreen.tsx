import React, { FC } from 'react'
import Header from '../containers/organisms/Header'
import Menu from '../components/organisms/Menu'
import ProgressBar from '../components/molecules/ProgressBar'

const PostScreen: FC = () => {
  return (
    <div className="post-screen">
      <Header isPost={false} />
      <Menu />
      <ProgressBar />
    </div>
  )
}

export default PostScreen
