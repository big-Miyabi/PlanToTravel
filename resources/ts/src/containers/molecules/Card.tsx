import React, { FC, useState } from 'react'
import * as H from 'history'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'
import { postByAxios } from '../../utilities/axios'
import { PostCardType } from '../../utilities/types'
import PopularCard from '../../components/molecules/PopularCard'
import NewCard from '../../components/molecules/NewCard'

type Props = {
  isNew: boolean
  post: PostCardType
  gradientId: string
  history: H.History
}

const PopularCardContainer: FC<Props> = ({
  isNew,
  post,
  gradientId,
  history,
}) => {
  const myUid = useSelector(
    (state: RootState) => state.loginReducer.id
  )
  const [isMeLover, setIsMeLover] = useState<boolean>(
    post.isLiked
  )
  const [isMeBookmarked, setIsMeBookmarked] = useState<
    boolean
  >(post.isBookmarked)
  const likes = post.isLiked ? post.likes - 1 : post.likes

  const onClickHeart = async () => {
    setIsMeLover(!isMeLover)
    const result = await postByAxios.like({
      uid: String(myUid),
      sid: String(post.id),
    })
    console.log(result.result)
  }

  const onClickBookmark = async () => {
    setIsMeBookmarked(!isMeBookmarked)
    const result = await postByAxios.bookmark({
      uid: String(myUid),
      sid: String(post.id),
    })
    console.log(result.result)
  }

  return (
    <>
      {isNew ? (
        <NewCard
          post={post}
          gradientId={gradientId}
          isMeLover={isMeLover}
          isMeBookmarked={isMeBookmarked}
          likes={likes}
          onClickHeart={onClickHeart}
          onClickBookmark={onClickBookmark}
          history={history}
        />
      ) : (
        <PopularCard
          post={post}
          gradientId={gradientId}
          isMeLover={isMeLover}
          isMeBookmarked={isMeBookmarked}
          likes={likes}
          onClickHeart={onClickHeart}
          onClickBookmark={onClickBookmark}
          history={history}
        />
      )}
    </>
  )
}

export default PopularCardContainer
