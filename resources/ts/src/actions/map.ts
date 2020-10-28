import { ActionTypes } from './index'
import { Target } from '../utilities/types'

export const setShouldAppearMap = (
  shouldAppear: boolean,
  target: Target
) =>
  ({
    type: ActionTypes.SET_SHOULD_APPEAR_MAP,
    payload: {
      shouldAppear,
      target,
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

export const setSettingPlaceType = (
  setType: 'add' | 'edit' | 'cancel' | 'none'
) =>
  ({
    type: ActionTypes.SET_SETTING_PLACE_TYPE,
    payload: {
      setType,
    },
  } as const)
