import React, { FC } from 'react'
import * as H from 'history'
import PostLocation from '../../components/organisms/PostLocation'

type Props = {
  history: H.History
}

const PostLocationContainer: FC<Props> = ({ history }) => {
  return <PostLocation history={history} />
}

export default PostLocationContainer
