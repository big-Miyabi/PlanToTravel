export type ItineraryType = {
  whether: string
  place: string
}

export type PostCardType = {
  id: number
  hasGoTo: boolean
  favNum: number
  itinerary: ItineraryType[]
}
