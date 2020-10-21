import React, { FC, useEffect } from 'react'
import { RouteComponentProps as Props } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../reducers/index'
import { setPostProgressIndex } from '../actions/post'
import Header from '../containers/organisms/Header'
import Menu from '../components/organisms/Menu'
import ProgressBar from '../components/molecules/ProgressBar'
import PostOverview from '../containers/organisms/PostOverview'

const PostScreen: FC<Props> = (props) => {
  const dispatch = useDispatch()
  const index = useSelector(
    (state: RootState) => state.postReducer.index
  )

  useEffect(() => {
    dispatch(setPostProgressIndex(0))
  }, [])

  return (
    <div className="post-screen">
      <Header isPost={false} />
      <Menu />
      <ProgressBar
        className="post-screen__progress-map"
        names={['概要', '場所', '確認']}
        index={index}
      />
      {index === 0 ? (
        <PostOverview history={props.history} />
      ) : (
        <></>
      )}
    </div>
  )
}

export default PostScreen
