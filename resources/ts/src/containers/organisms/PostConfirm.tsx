import React, { FC } from 'react'
import * as H from 'history'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'
import { Place } from '../../utilities/types'
import PostConfirm from '../../components/organisms/PostConfirm'

type Props = {
  history: H.History
}

const getImages = (itineraryInfo: Place[][]): string[] => {
  const nestedImages = itineraryInfo.map((val1) => {
    const placeImages: string[] = val1.map((val2) => {
      if (val2.image) return val2.image

      return ''
    })

    return placeImages
  })
  const images = ['']
    .concat(...nestedImages)
    .filter((v) => v)

  return images
}

const PostConfirmContainer: FC<Props> = ({ history }) => {
  const itineraryInfo: Place[][] = useSelector(
    (state: RootState) => state.postReducer.itinerary
  )
  const returnToPrevious = () => {
    history.push('/post/location')
  }

  const post = () => {
    const images = getImages(itineraryInfo)
    console.log(images)
  }

  return (
    <PostConfirm
      returnToPrevious={returnToPrevious}
      itineraryInfo={itineraryInfo}
      post={post}
    />
  )
}

export default PostConfirmContainer
