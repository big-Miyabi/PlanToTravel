import React, { FC, useState, useEffect } from 'react'
import NewPosts from '../../components/organisms/NewPosts'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'
import { postByAxios } from '../../utilities/axios'
import { PostCardType } from '../../utilities/types'
import { convertToPostCard } from '../../utilities/utilFunc'

const NewPostsContainer: FC = () => {
  const myUid = useSelector(
    (state: RootState) => state.loginReducer.id
  )

  const [posts, setPosts] = useState<PostCardType[]>([])

  useEffect(() => {
    const getItineraryList = async () => {
      const { result } = await postByAxios.getItineraryList(
        {
          uid: String(myUid),
          skip: 0,
          limit: 6,
          descName: 'created_at',
        }
      )
      const converted = convertToPostCard(result)
      setPosts(converted)
    }
    getItineraryList()
  }, [])

  return <NewPosts posts={posts} />
}

export default NewPostsContainer
