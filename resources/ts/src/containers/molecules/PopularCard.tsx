import React, { FC } from 'react'
import PopularCard from '../../components/molecules/PopularCard'
import { PostCardType } from '../../utilities/types'

type Props = {
  post: PostCardType
  gradientId: string
}

const PopularCardContainer: FC<Props> = ({
  post,
  gradientId,
}) => {
  return <PopularCard post={post} gradientId={gradientId} />
}

export default PopularCardContainer
