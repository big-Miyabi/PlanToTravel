import { ActionTypes } from './index'

export const setShouldAppearMap = (
  shouldAppear: boolean,
  index: number | null
) =>
  ({
    type: ActionTypes.SET_SHOULD_APPEAR_MAP,
    payload: {
      shouldAppear,
      index,
    },
  } as const)

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
