import React, { FC, useState, useEffect } from 'react'
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
    (state: RootState) => state.postReducer.progressIndex
  )
  const [hoge, setHoge] = useState(0)

  const pathnames = {
    '/post/overview': 0,
    '/post/location': 1,
    '/post/confirm': 2,
  }

  useEffect(() => {
    ;(() => { // eslint-disable-line
      if (props.location.pathname === '/post') {
        setHoge(index)

        return
      }
      // setHoge()
    })()
  }, [props.location.pathname])

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
