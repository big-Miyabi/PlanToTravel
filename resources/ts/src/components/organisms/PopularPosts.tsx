import React, { FC } from 'react'
import * as H from 'history'
import Card from '../../containers/molecules/Card'
import { PostCardType } from '../../utilities/types'

type Props = {
  posts: PostCardType[] | null
  history: H.History
}

const PopularPosts: FC<Props> = ({ posts, history }) => {
  return (
    <div className="popular-posts">
      <p className="popular-posts__title">人気の投稿</p>
      {posts ? (
        <>
          {posts.map((post, index) => (
            <Card
              isNew={false}
              post={post}
              key={index}
              gradientId={`popular_post_${index}`}
              history={history}
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
