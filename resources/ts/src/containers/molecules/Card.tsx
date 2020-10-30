import React, { FC, useState, useEffect } from 'react'
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
}

const PopularCardContainer: FC<Props> = ({
  isNew,
  post,
  gradientId,
}) => {
  const myUid = useSelector(
    (state: RootState) => state.loginReducer.id
  )
  const [isMeLover, setIsMeLover] = useState<boolean>(false)
  const [isMeBookmarked, setIsMeBookmarked] = useState<
    boolean
  >(false)
  const [likes, setLikes] = useState<number>(0)

  useEffect(() => {
    console.log(post.isBookmarked)
    setIsMeLover(post.isLiked)
    setIsMeBookmarked(post.isBookmarked)
    setLikes(post.isLiked ? post.likes - 1 : post.likes)
  }, [post.isBookmarked, post.isLiked, post.likes])

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
        />
      )}
    </>
  )
}

export default PopularCardContainer
