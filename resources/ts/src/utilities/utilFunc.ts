import {
  ItineraryByLaravel,
  Place,
  initialPlace,
  PostCardType,
  ItineraryCardType,
  GettedItineraryDetail,
} from './types'
import moment from 'moment'

export const getClassName = (
  arg: { common: string; unique: string },
  modifier: string
): string => {
  if (!modifier) return `${arg.common} ${arg.unique}`

  return `${arg.common}__${modifier} ${arg.unique}__${modifier}`
}

export const addValueIntoInput = (
  ref: React.RefObject<HTMLInputElement>,
  value: string
): void => {
  const input = ref.current
  if (!input) return
  input.value = value
}

export const checkObjEqual = (a: Object, b: Object) => { // eslint-disable-line
  const aJSON = JSON.stringify(Object.entries(a).sort())
  const bJSON = JSON.stringify(Object.entries(b).sort())

  return aJSON === bJSON
}

// ヒュベニの公式
export const getDistanceByHubeny = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): string => {
  const rad = (deg: number): number => {
    return (deg * Math.PI) / 180
  }
  //degree to radian
  lat1 = rad(lat1)
  lng1 = rad(lng1)
  lat2 = rad(lat2)
  lng2 = rad(lng2)

  // 緯度差
  const latDiff = lat1 - lat2
  // 経度差算
  const lngDiff = lng1 - lng2
  // 平均緯度
  const latAvg = (lat1 + lat2) / 2.0
  // 赤道半径
  const a = 6378137.0
  // 極半径
  const b = 6356752.314140356
  // 第一離心率^2
  const e2 = 0.00669438002301188
  // 赤道上の子午線曲率半径
  const a1e2 = 6335439.32708317

  const sinLat = Math.sin(latAvg)
  const W2 = 1.0 - e2 * (sinLat * sinLat)

  // 子午線曲率半径M
  const M = a1e2 / (Math.sqrt(W2) * W2)
  // 卯酉線曲率半径
  const N = a / Math.sqrt(W2)

  const t1 = M * latDiff
  const t2 = N * Math.cos(latAvg) * lngDiff

  const distanceM = Math.sqrt(t1 * t1 + t2 * t2)
  const distanceKm =
    Math.round((distanceM / 1000) * 10) / 10

  return distanceM >= 1000
    ? `直線距離 ${distanceKm} km`
    : `直線距離 ${Math.floor(distanceM)} m`
}

// Controllerから取得してきた行程表データを、フロントで表示するための形式に置き換える
export const convertItinerary = (
  itinerary: ItineraryByLaravel[],
  dateS: string,
  dateF: string
): Place[][] => {
  moment.locale('ja')
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

// Controllerから取得してきた行程表データを、フロントでカード型で表示するための形式に置き換える
const convertToCardItinerary = (
  itinerary: ItineraryByLaravel[]
): ItineraryCardType[] => {
  const initialValue: ItineraryCardType = {
    weather: 'sun',
    place: '',
  }
  const initializedArray: ItineraryCardType[] = [
    // ∵ カード型で必要な場所の最大数は4
    ...Array(4),
  ].map(() => initialValue)

  itinerary.some((value, index) => {
    const cardValue: ItineraryCardType = {
      place: value.placename,
      weather: value.weather,
    }
    initializedArray[index] = cardValue
    if (index === 3) return true
  })

  const filteredArray = initializedArray.filter((value) => {
    const result = checkObjEqual(value, initialValue)

    return !result
  })

  return filteredArray
}

// Controllerから取得してきたスケジュールデータを、フロントでカード型で表示するための形式に置き換える
export const convertToPostCard = (
  itinerary: GettedItineraryDetail[]
): PostCardType[] => {
  const initialPostCard: PostCardType = {
    id: -1,
    header: '',
    hasGoTo: false,
    likes: -1,
    itinerary: [
      {
        weather: 'sun',
        place: '',
      },
    ],
  }
  const initializedArray: PostCardType[] = [
    // ∵ カード型で必要な場所の最大数は4
    ...Array(itinerary.length),
  ].map(() => initialPostCard)

  itinerary.forEach((value, index) => {
    const postCardInfo: PostCardType = {
      id: value.schedule_info.id,
      header: value.schedule_info.header
        ? value.schedule_info.header
        : '',
      hasGoTo: value.tags.includes('GoToトラベル'),
      likes: value.likeCounts,
      itinerary: convertToCardItinerary(value.places),
    }
    initializedArray[index] = postCardInfo
  })
  const filteredArray: PostCardType[] = initializedArray.filter(
    (value) => {
      const result = checkObjEqual(value, initialPostCard)

      return !result
    }
  )

  return filteredArray
}
