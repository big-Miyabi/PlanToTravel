import { Reducer } from 'redux'
import {
  ActionTypes,
  UnionedAction,
} from '../actions/index'
import { Target, initialTarget } from '../utilities/types'

type State = {
  shouldAppear: boolean
  target: Target
  name: string
  lat: number
  lng: number
  setType: 'add' | 'edit' | 'cancel' | 'none'
}

type MapReducer = Reducer<State, UnionedAction>

const initialState: State = {
  shouldAppear: false,
  target: initialTarget,
  name: '',
  lat: 0,
  lng: 0,
  setType: 'none',
}

export const mapReducer: MapReducer = (
  state = initialState,
  action: UnionedAction
): State => {
  switch (action.type) {
    case ActionTypes.SET_SHOULD_APPEAR_MAP:
      return {
        ...state,
        shouldAppear: action.payload.shouldAppear,
        target: action.payload.target,
      }
    case ActionTypes.SET_PLACE_INFO:
      return {
        ...state,
        name: action.payload.name,
        lat: action.payload.lat,
        lng: action.payload.lng,
      }
    case ActionTypes.SET_SETTING_PLACE_TYPE:
      return {
        ...state,
        setType: action.payload.setType,
      }
    default: {
      return state
    }
  }
}
