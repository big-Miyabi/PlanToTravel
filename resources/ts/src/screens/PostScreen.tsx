import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../reducers/index'
import Header from '../containers/organisms/Header'
import Menu from '../components/organisms/Menu'
import ProgressBar from '../components/molecules/ProgressBar'
import PostOverview from '../containers/organisms/PostOverview'

const PostScreen: FC = () => {
  const index = useSelector(
    (state: RootState) => state.postReducer.index
  )

  return (
    <div className="post-screen">
      <Header isPost={false} />
      <Menu />
      <ProgressBar
        className="post-screen__progress-map"
        names={['概要', '場所', '確認']}
        index={index}
      />
      {index === 0 ? <PostOverview /> : <></>}
    </div>
  )
}

export default PostScreen
