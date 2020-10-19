import React, { FC } from 'react'
import PopularCard from '../../containers/molecules/PopularCard'

const PopularPosts: FC = () => {
  return (
    <div className="popular-posts">
      <p className="popular-posts__title">人気の投稿</p>
      <PopularCard />
    </div>
  )
}

export default PopularPosts
