import { ActionTypes } from './index'

export const setShouldAppearMap = (shouldAppear: boolean) =>
  ({
    type: ActionTypes.SET_SHOULD_APPEAR_MAP,
    payload: {
      shouldAppear,
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
