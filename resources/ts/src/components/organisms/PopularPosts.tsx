import React, { FC } from 'react'
import PopularCard from '../../containers/molecules/PopularCard'
import { PostCardType } from '../../utilities/types'

type Props = {
  posts: PostCardType[] | null
}

const PopularPosts: FC<Props> = ({ posts }) => {
  return (
    <div className="popular-posts">
      <p className="popular-posts__title">人気の投稿</p>
      {posts ? (
        <>
          {posts.map((post, index) => (
            <PopularCard
              post={post}
              key={index}
              gradientId={`popular_post_${index}`}
            />
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default PopularPosts
