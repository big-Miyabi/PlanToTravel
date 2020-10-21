import React, { FC } from 'react'
import NewCard from '../../containers/molecules/NewCard'
import { PostCardType } from '../../utilities/types'

type Props = {
  posts: PostCardType[]
}

const NewPosts: FC<Props> = ({ posts }) => {
  const rowPosts: PostCardType[][] = []

  // 一列2カードの配列を作る
  posts.forEach((v, i) => {
    if (i === posts.length - 1 && posts.length % 2 === 1) {
      // 投稿数が奇数 かつ 最後の一枚だった時
      rowPosts.push(posts.slice(i, i + 1))

      return
    }
    if (i % 2 === 0) return
    rowPosts.push(posts.slice(i - 1, i + 1))
  })

  return (
    <div className="new-posts">
      <p className="new-posts__title">新着の投稿</p>

      {rowPosts.map((rowPost, rowKey) => (
        <div className="new-posts__row" key={rowKey}>
          {rowPost.map((post, cardKey) => {
            const id = rowKey * 2 + cardKey

            return (
              <NewCard
                post={post}
                key={cardKey}
                gradientId={`new_post_${id}`}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default NewPosts
