import React, { FC } from 'react'
import NewCard from '../../components/molecules/NewCard'
import { PostCardType } from '../../utilities/types'

type Props = {
  post: PostCardType
  gradientId: string
}

const NewCardContainer: FC<Props> = ({
  post,
  gradientId,
}) => {
  return <NewCard post={post} gradientId={gradientId} />
}

export default NewCardContainer
