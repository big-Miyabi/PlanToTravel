import React, { FC, useState, useEffect } from 'react'
import { Place } from '../../utilities/types'
import { postByAxios } from '../../utilities/axios'
import { convertItinerary } from '../../utilities/utilFunc'
import ItineraryDetailScreen from '../../components/screens/ItineraryDetailScreen'
import { RouteComponentProps } from 'react-router'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'

type urlProps = RouteComponentProps<{ id: string }>

const ItineraryDetailScreenContainer: FC<urlProps> = (
  props
) => {
  const sid = props.match.params.id
  const [itinerary, setItinerary] = useState<
    Place[][] | null
  >(null)
  const [posterUid, setPosterUid] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [headerUrl, setHeaderUrl] = useState<string>('')
  const [dateS, setDateS] = useState<string>('')
  const [dateF, setDateF] = useState<string>('')
  const [isPublic, setIsPublic] = useState<boolean>(true)
  const [people, setPeople] = useState<number>(1)
  const [tags, setTags] = useState<string[]>([''])
  const [likes, setLikes] = useState<number>(0)
  const [isMeLover, setIsMeLover] = useState<boolean>(false)
  const [isMeBookmarked, setIsMeBookmarked] = useState<
    boolean
  >(false)
  const myUid = useSelector(
    (state: RootState) => state.loginReducer.id
  )

  useEffect(() => {
    const getItineraryByAxios = async () => {
      const getResult = await postByAxios.getItineraryDetail(
        {
          uid: String(myUid),
          sid,
        }
      )
      console.log(getResult.result)

      const {
        schedule_info: scheduleInfo,
        tags: gettedTags,
        places: itineraryByLaravel,
        likeCounts: likeCounts,
        is_liked: isLiked,
        is_bookmark: isBookmarked,
      } = getResult.result
      const { day_s: dateS, day_f: dateF } = scheduleInfo
      const convertedItinerary = convertItinerary(
        itineraryByLaravel,
        dateS,
        dateF
      )

      const replacedDateS = dateS.replace(/-/g, '.')
      const replacedDateF = dateF.replace(/-/g, '.')
      setPosterUid(String(scheduleInfo.userid))
      setTitle(scheduleInfo.title)
      setHeaderUrl(
        scheduleInfo.header ? scheduleInfo.header : ''
      )
      setDateS(replacedDateS)
      setDateF(replacedDateF)
      setIsPublic(scheduleInfo.is_public)
      setPeople(scheduleInfo.people)
      setTags(gettedTags.slice())
      setIsMeLover(isLiked)
      setLikes(isLiked ? likeCounts - 1 : likeCounts)
      setIsMeBookmarked(isBookmarked)
      setItinerary(convertedItinerary)
    }

    getItineraryByAxios()
  }, [])

  const onClickHeart = async () => {
    setIsMeLover(!isMeLover)
    const result = await postByAxios.like({
      uid: String(myUid),
      sid,
    })
    console.log(result.result)
  }

  const onClickBookmark = async () => {
    setIsMeBookmarked(!isMeBookmarked)
    const result = await postByAxios.bookmark({
      uid: String(myUid),
      sid,
    })
    console.log(result.result)
  }

  return (
    <ItineraryDetailScreen
      itinerary={itinerary}
      username={'test'}
      icon={''}
      headerUrl={headerUrl}
      title={title}
      dateS={dateS}
      dateF={dateF}
      people={people}
      tags={tags}
      likes={likes}
      isMeLover={isMeLover}
      onClickHeart={onClickHeart}
      isMeBookmarked={isMeBookmarked}
      onClickBookmark={onClickBookmark}
      isPoster={posterUid === String(myUid)}
    />
  )
}

export default ItineraryDetailScreenContainer
