import React, { FC } from 'react'
import PopularPosts from '../../components/organisms/PopularPosts'
import { PostCardType } from '../../utilities/types'

const PopularPostsContainer: FC = () => {
  // テスト用
  const posts: PostCardType[] = [
    {
      id: 1000,
      header: '../images/post_ninki_sample1.png',
      hasGoTo: true,
      favNum: 123,
      itinerary: [
        {
          weather: 'sun',
          place: '浅草駅',
        },
        {
          weather: 'rain',
          place: '井の頭自然..',
        },
        {
          weather: 'night',
          place: '東京駅',
        },
        {
          weather: 'snow',
          place: '上野駅',
        },
      ],
    },
    {
      id: 1001,
      header: '../images/post_defaultPho.png',
      hasGoTo: true,
      favNum: 100,
      itinerary: [
        {
          weather: 'sun',
          place: '浅草駅',
        },
        {
          weather: 'rain',
          place: '井の頭自然..',
        },
        {
          weather: 'night',
          place: '東京駅',
        },
      ],
    },
    {
      id: 1002,
      header: '../images/post_ninki_sample2.png',
      hasGoTo: false,
      favNum: 98,
      itinerary: [
        {
          weather: 'sun',
          place: '浅草駅',
        },
        {
          weather: 'rain',
          place: '井の頭自然..',
        },
        {
          weather: 'night',
          place: '東京駅',
        },
        {
          weather: 'snow',
          place: '上野駅',
        },
      ],
    },
  ]

  return <PopularPosts posts={posts} />
}

export default PopularPostsContainer
