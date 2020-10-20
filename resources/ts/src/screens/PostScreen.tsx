import React, { FC } from 'react'
import Header from '../containers/organisms/Header'
import Menu from '../components/organisms/Menu'

const PostScreen: FC = () => {
  return (
    <div className="post-screen">
      <Header isPost={false} />
      <Menu />
    </div>
  )
}

export default PostScreen
