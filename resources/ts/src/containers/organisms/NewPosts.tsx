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
          whether: 'sun',
          place: '浅草駅',
        },
        {
          whether: 'rain',
          place: '井の頭自然..',
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
      id: 2001,
      header: '../images/post_defaultPho.png',
      hasGoTo: false,
      favNum: 100,
      itinerary: [
        {
          whether: 'night',
          place: '浅草駅',
        },
        {
          whether: 'snow',
          place: '井の頭自然..',
        },
        {
          whether: 'sun',
          place: '東京駅',
        },
        {
          whether: 'snow',
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
          whether: 'snow',
          place: '浅草駅',
        },
        {
          whether: 'cloud',
          place: '井の頭自然..',
        },
        {
          whether: 'rain',
          place: '東京駅',
        },
        {
          whether: 'snow',
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
          whether: 'rain',
          place: '浅草駅',
        },
        {
          whether: 'snow',
          place: '井の頭自然..',
        },
        {
          whether: 'cloud',
          place: '東京駅',
        },
        {
          whether: 'snow',
          place: '上野駅',
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
          whether: 'snow',
          place: '浅草駅',
        },
        {
          whether: 'night',
          place: '井の頭自然..',
        },
        {
          whether: 'rain',
          place: '東京駅',
        },
        {
          whether: 'snow',
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
          whether: 'sun',
          place: '浅草駅',
        },
        {
          whether: 'rain',
          place: '井の頭自然..',
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

  return <NewPosts posts={posts} />
}

export default NewPostsContainer
