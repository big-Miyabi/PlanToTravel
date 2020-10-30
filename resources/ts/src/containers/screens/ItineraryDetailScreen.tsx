import React, { FC, useState, useEffect } from 'react'
import moment from 'moment'
import {
  initialPlace,
  ItineraryByLaravel,
  Place,
  ScheduleInfo,
} from '../../utilities/types'
import { postByAxios } from '../../utilities/axios'
import { checkObjEqual } from '../../utilities/utilFunc'
import ItineraryDetailScreen from '../../components/screens/ItineraryDetailScreen'
import { RouteComponentProps } from 'react-router'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'

type urlProps = RouteComponentProps<{ id: string }>

const convertItinerary = (
  itinerary: ItineraryByLaravel[],
  dateS: string,
  dateF: string
): Place[][] => {
  const momentS = moment(dateS)
  const momentF = moment(dateF)
  const dateDiff = momentF.diff(momentS, 'days') + 1
  const initializedArray: Place[][] = [
    ...Array(dateDiff),
  ].map(
    // ∵ 場所は一つの日付につき最大14個
    () => [...Array(14)].map(() => initialPlace)
  )
  itinerary.forEach((value) => {
    const momentDay = moment(value.day)
    const dateIndex = Math.abs(
      momentS.diff(momentDay, 'days')
    )
    const replacedDate = value.day.replace(/-/g, '.')
    const placeValue: Place = {
      date: replacedDate,
      name: value.placename,
      location: {
        lat: value.latitude,
        lng: value.longitude,
      },
      weather: value.weather,
      rating: value.rating,
      image: value.img,
      comment: value.comment ? value.comment : '',
      transport: value.transport,
      transportDetail: value.transportD
        ? value.transportD
        : '',
      distance: value.distance ? value.distance : '',
    }

    initializedArray[dateIndex][
      value.ordernumber - 1
    ] = placeValue
  })

  initializedArray.forEach((places, index) => {
    initializedArray[index] = places.filter((place) => {
      const result = checkObjEqual(place, initialPlace)

      return !result
    })
  })
  initializedArray.filter((v) => v)

  return initializedArray
}

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
        sid
      )
      const [
        scheduleInfo,
        gettedTags,
        itineraryByLaravel,
        isLiked,
        likeCounts,
        isBookmarked,
      ]: [
        ScheduleInfo,
        string[],
        ItineraryByLaravel[],
        boolean,
        number,
        boolean
      ] = getResult.result
      const { day_s: dateS, day_f: dateF } = scheduleInfo
      const convertedItinerary = convertItinerary(
        itineraryByLaravel,
        dateS,
        dateF
      )
      console.log(`isLiked: ${isLiked}`)
      console.log(`likeCounts: ${likeCounts}`)

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
      setLikes(likeCounts)
      setIsMeLover(isLiked)
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
