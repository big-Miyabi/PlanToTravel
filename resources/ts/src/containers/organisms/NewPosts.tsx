import React, { FC } from 'react'
import NewPosts from '../../components/organisms/NewPosts'
import { PostCardType } from '../../utilities/types'

const NewPostsContainer: FC = () => {
  // テスト用
  const posts: PostCardType[] = [
    {
      id: 2000,
      header: '../images/listimg_sampleBg1.png',
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
      id: 2001,
      header: '../images/post_defaultPho.png',
      hasGoTo: false,
      favNum: 100,
      itinerary: [
        {
          weather: 'night',
          place: '浅草駅',
        },
        {
          weather: 'sun',
          place: '東京駅',
        },
        {
          weather: 'snow',
          place: '上野駅',
        },
      ],
    },
    {
      id: 2002,
      header: '../images/post_ninki_sample2.png',
      hasGoTo: true,
      favNum: 98,
      itinerary: [
        {
          weather: 'snow',
          place: '浅草駅',
        },
        {
          weather: 'cloud',
          place: '井の頭自然..',
        },
        {
          weather: 'rain',
          place: '東京駅',
        },
        {
          weather: 'snow',
          place: '上野駅',
        },
      ],
    },
    {
      id: 2003,
      header: '../images/post_ninki_sample1.png',
      hasGoTo: true,
      favNum: 123,
      itinerary: [
        {
          weather: 'rain',
          place: '浅草駅',
        },
        {
          weather: 'snow',
          place: '井の頭自然..',
        },
      ],
    },
    {
      id: 2004,
      header: '../images/post_defaultPho.png',
      hasGoTo: false,
      favNum: 100,
      itinerary: [
        {
          weather: 'snow',
          place: '浅草駅',
        },
        {
          weather: 'night',
          place: '井の頭自然..',
        },
        {
          weather: 'rain',
          place: '東京駅',
        },
        {
          weather: 'snow',
          place: '上野駅',
        },
      ],
    },
    {
      id: 2005,
      header: '../images/post_ninki_sample2.png',
      hasGoTo: true,
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

  return <NewPosts posts={posts} />
}

export default NewPostsContainer
