import { faYelp } from '@fortawesome/free-brands-svg-icons'
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
  whether: string
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

export const initialTarget = {
  dateIndex: null,
  placeIndex: null,
}

export type Whether =
  | 'sun'
  | 'cloud'
  | 'rain'
  | 'snow'
  | 'night'

export type Place = {
  name: string | null
  location: Coords | null
  whether: Whether
}

export const initialPlace: Place = {
  name: null,
  location: null,
  whether: 'sun',
}

export type WhetherIcon = {
  icon: IconDefinition
  name: Whether
}

export type WhetherItem = {
  icon: IconDefinition
  name: Whether
  isSelected: boolean
}

export const initialWhetherItems: WhetherItem[] = [
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
