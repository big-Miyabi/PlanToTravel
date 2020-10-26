import { Coords } from 'google-map-react'

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

export type Place = {
  name: string | null
  location: Coords | null
  whether: 'sun' | 'cloud' | 'rain' | 'snow' | 'night'
}

export const initialPlace: Place = {
  name: null,
  location: null,
  whether: 'sun',
}
