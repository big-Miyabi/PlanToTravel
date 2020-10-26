import { ActionTypes } from './index'

export const setPlaceInfo = (
  name: string,
  lat: number,
  lng: number
) =>
  ({
    type: ActionTypes.SET_PLACE_INFO,
    payload: {
      name,
      lat,
      lng,
    },
  } as const)
