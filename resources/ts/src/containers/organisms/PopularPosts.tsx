import React, { FC } from 'react'
import PopularPosts from '../../components/organisms/PopularPosts'
import { PostCardType } from '../../utilities/types'

const PopularPostsContainer: FC = () => {
  // テスト用
  const posts: PostCardType[] = [
    {
      id: 1000,
      hasGoTo: true,
      favNum: 123,
      itinerary: [
        {
          whether: 'sun',
          place: '浅草駅',
        },
        {
          whether: 'rain',
          place: '井の頭自然文化公園・熱帯鳥温園',
        },
        {
          whether: 'night',
          place: '東京駅',
        },
        {
          whether: 'snow',
          place: '上野駅',
        },
      ],
    },
    {
      id: 1001,
      hasGoTo: true,
      favNum: 100,
      itinerary: [
        {
          whether: 'sun',
          place: '浅草駅',
        },
        {
          whether: 'rain',
          place: '井の頭自然文化公園・熱帯鳥温園',
        },
        {
          whether: 'night',
          place: '東京駅',
        },
        {
          whether: 'snow',
          place: '上野駅',
        },
      ],
    },
    {
      id: 1002,
      hasGoTo: true,
      favNum: 98,
      itinerary: [
        {
          whether: 'sun',
          place: '浅草駅',
        },
        {
          whether: 'rain',
          place: '井の頭自然文化公園・熱帯鳥温園',
        },
        {
          whether: 'night',
          place: '東京駅',
        },
        {
          whether: 'snow',
          place: '上野駅',
        },
      ],
    },
  ]

  return <PopularPosts posts={posts} />
}

export default PopularPostsContainer
