import React, { FC, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import * as H from 'history'
import PopularPosts from '../../components/organisms/PopularPosts'
import { RootState } from '../../reducers'
import { postByAxios } from '../../utilities/axios'
import { PostCardType } from '../../utilities/types'
import { convertToPostCard } from '../../utilities/utilFunc'

type Props = {
  history: H.History
}

const PopularPostsContainer: FC<Props> = ({ history }) => {
  const myUid = useSelector(
    (state: RootState) => state.loginReducer.id
  )

  const [posts, setPosts] = useState<PostCardType[] | null>(
    null
  )

  useEffect(() => {
    const getItineraryList = async () => {
      const { result } = await postByAxios.getItineraryList(
        {
          uid: String(myUid),
          skip: 0,
          limit: 3,
          descName: 'likes',
        }
      )
      const converted = convertToPostCard(result)
      setPosts(converted)
    }
    getItineraryList()
  }, [])

  return <PopularPosts posts={posts} history={history} />
}

export default PopularPostsContainer
