import React, { FC } from 'react'
import NewCard from '../../components/molecules/NewCard'
import { PostCardType } from '../../utilities/types'

type Props = {
  post: PostCardType
}

const NewCardContainer: FC<Props> = ({ post }) => {
  return <NewCard post={post} />
}

export default NewCardContainer
