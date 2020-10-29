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
import ItineraryDetail from '../../components/screens/ItineraryDetailScreen'
import { RouteComponentProps } from 'react-router'

type urlProps = RouteComponentProps<{ id: string }>

const convertItinerary = (
  itinerary: ItineraryByLaravel[],
  dateS: string,
  dateF: string
) => {
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
    const placeValue: Place = {
      date: value.day,
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

  useEffect(() => {
    const getItineraryByAxios = async () => {
      const getResult = await postByAxios.getItineraryDetail(
        sid
      )
      const [
        scheduleInfo,
        tags,
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
      console.log(itineraryByLaravel)

      const hoge = convertItinerary(
        itineraryByLaravel,
        dateS,
        dateF
      )
      console.log(hoge)
    }
    getItineraryByAxios()
  }, [])

  return <ItineraryDetail />
}

export default ItineraryDetailScreenContainer
