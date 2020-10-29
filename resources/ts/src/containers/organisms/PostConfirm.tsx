import React, { FC, useState } from 'react'
import * as H from 'history'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'
import { Place } from '../../utilities/types'
import { postFirebaseStorage } from '../../utilities/postFirebaseStorage'
import { postByAxios } from '../../utilities/axios'
import PostConfirm from '../../components/organisms/PostConfirm'
import Loading from '../../components/atoms/Loading'

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

const replaceBase64ToUrl = (
  itineraryInfo: Place[][],
  urls: string[]
) => {
  itineraryInfo.some((places) => {
    places.some((place) => {
      if (place.image) {
        const url = urls.shift()
        place.image = url ? url : ''
      }
      if (urls.length === 0) return true
    })
    if (urls.length === 0) return true
  })
}

const PostConfirmContainer: FC<Props> = ({ history }) => {
  const {
    itinerary: itineraryInfo,
    src: header,
    title,
    dateS,
    dateF,
    people,
    tags,
    isPublic,
  } = useSelector((state: RootState) => state.postReducer)
  const id = useSelector(
    (state: RootState) => state.loginReducer.id
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const returnToPrevious = () => {
    history.push('/post/location')
  }

  const post = async () => {
    setIsLoading(true)
    const images = getImages(itineraryInfo)
    const headerUrl = await getUrl(id, 'header', header)
    const urls = await Promise.all(
      images.map(async (image) => {
        return await getUrl(id, 'place', image)
      })
    )
    replaceBase64ToUrl(itineraryInfo, urls)
    const postResult = postByAxios.postItinerary({
      uid: String(id),
      title,
      header: headerUrl,
      people,
      day_s: dateS,
      day_f: dateF,
      tag_name: tags,
      is_public: isPublic,
      itinerary: itineraryInfo,
    })
    console.log(postResult)
    setIsLoading(false)
  }

  return (
    <>
      <PostConfirm
        returnToPrevious={returnToPrevious}
        itineraryInfo={itineraryInfo}
        post={post}
      />
      <Loading isLoading={isLoading} />
    </>
  )
}

export default PostConfirmContainer
