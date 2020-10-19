import React, { FC } from 'react'
import PopularCard from '../../components/molecules/PopularCard'
import { PostCardType } from '../../utilities/types'

type Props = {
  post: PostCardType
}

const PopularCardContainer: FC<Props> = ({ post }) => {
  return <PopularCard post={post} />
}

export default PopularCardContainer
