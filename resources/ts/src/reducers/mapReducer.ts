import { Reducer } from 'redux'
import {
  ActionTypes,
  UnionedAction,
} from '../actions/index'

type State = {
  name: string
  lat: number
  lng: number
}

type MapReducer = Reducer<State, UnionedAction>

const initialState: State = {
  name: '',
  lat: 0,
  lng: 0,
}

export const mapReducer: MapReducer = (
  state = initialState,
  action: UnionedAction
): State => {
  switch (action.type) {
    case ActionTypes.SET_PLACE_INFO:
      return {
        ...state,
        name: action.payload.name,
        lat: action.payload.lat,
        lng: action.payload.lng,
      }
    default: {
      return state
    }
  }
}
