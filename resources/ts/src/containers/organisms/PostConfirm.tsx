import React, { FC, useState } from 'react'
import * as H from 'history'
import PostConfirm from '../../components/organisms/PostConfirm'

type Props = {
  history: H.History
}

const PostConfirmContainer: FC<Props> = ({ history }) => {
  const returnToPrevious = () => {
    history.push('/post/location')
  }

  return <PostConfirm returnToPrevious={returnToPrevious} />
}

export default PostConfirmContainer
