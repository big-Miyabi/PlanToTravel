import React, { FC } from 'react'
import * as H from 'history'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'
import { Place } from '../../utilities/types'
import { postFirebaseStorage } from '../../utilities/postFirebaseStorage'
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

const getUrl = (
  id: number,
  folderName: string,
  base64: string
): Promise<string> => {
  return new Promise(async (resolve) => { // eslint-disable-line
    const {
      uploadRef: ref,
    } = postFirebaseStorage.getUploadRef(
      String(id),
      folderName
    )
    const storageResult = await postFirebaseStorage.uploadPostImage(
      ref,
      base64
    )
    console.log(storageResult)

    const url = await postFirebaseStorage.getImageUrl(ref)
    resolve(url)
  })
}

const PostConfirmContainer: FC<Props> = ({ history }) => {
  const itineraryInfo: Place[][] = useSelector(
    (state: RootState) => state.postReducer.itinerary
  )
  const id = useSelector(
    (state: RootState) => state.loginReducer.id
  )
  const { src: header } = useSelector(
    (state: RootState) => state.postReducer
  )
  const returnToPrevious = () => {
    history.push('/post/location')
  }

  const post = async () => {
    const images = getImages(itineraryInfo)
    const headerUrl = await getUrl(id, 'header', header)
    const urls = await Promise.all(
      images.map(async (image) => {
        return await getUrl(id, 'place', image)
      })
    )
    console.log(headerUrl)
    console.log(urls)
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
