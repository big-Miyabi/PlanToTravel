import React, { FC, useState } from 'react'
import * as H from 'history'
import { useDispatch } from 'react-redux'
import { setPostProgressIndex } from '../../actions/post'
import PostOverView from '../../components/organisms/PostOverView'

type Props = {
  history: H.History
}

const PostOverviewContainer: FC<Props> = ({ history }) => {
  const dispatch = useDispatch()
  const goToNext = () => {
    dispatch(setPostProgressIndex(1))
    history.push('/post/location')
  }

  return <PostOverView goToNext={goToNext} />
}

export default PostOverviewContainer
