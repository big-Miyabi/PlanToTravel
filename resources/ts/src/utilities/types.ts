import { Coords } from 'google-map-react'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import {
  faSun,
  faCloud,
  faUmbrella,
  faSnowflake,
  faMoon,
} from '@fortawesome/free-solid-svg-icons'

export type ItineraryType = {
  weather: string
  place: string
}

export type PostCardType = {
  id: number
  header: string
  hasGoTo: boolean
  favNum: number
  itinerary: ItineraryType[]
}

export type OpacityGradientType = {
  start: number
  end: number
}

export type Target = {
  dateIndex: number | null
  placeIndex: number | null
}

export type Weather =
  | 'sun'
  | 'cloud'
  | 'rain'
  | 'snow'
  | 'night'

export type Transport =
  | '徒歩'
  | '自転車'
  | '車'
  | 'バス'
  | '電車'
  | '船'
  | '飛行機'
  | '入力なし'

export type Place = {
  name: string | null
  location: Coords | null
  weather: Weather
  rating: number
  image: File | null
  comment: string
  transport: Transport
  transportDetail: string
}

export type WeatherIcon = {
  icon: IconDefinition
  name: Weather
}

export type WeatherItem = {
  icon: IconDefinition
  name: Weather
  isSelected: boolean
}

export type RatingIcon = {
  isSelected: boolean
  name: string
}

export const initialTarget = {
  dateIndex: null,
  placeIndex: null,
}

export const initialPlace: Place = {
  name: null,
  location: null,
  weather: 'sun',
  rating: 0,
  image: null,
  comment: '',
  transport: '入力なし',
  transportDetail: '',
}

export const initialWeatherItems: WeatherItem[] = [
  {
    icon: faSun,
    name: 'sun',
    isSelected: true,
  },
  {
    icon: faCloud,
    name: 'cloud',
    isSelected: false,
  },
  {
    icon: faUmbrella,
    name: 'rain',
    isSelected: false,
  },
  {
    icon: faSnowflake,
    name: 'snow',
    isSelected: false,
  },
  {
    icon: faMoon,
    name: 'night',
    isSelected: false,
  },
]
