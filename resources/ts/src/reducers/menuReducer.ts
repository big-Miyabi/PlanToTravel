import { Reducer } from 'redux'
import {
  ActionTypes,
  UnionedAction,
} from '../actions/index'

type State = {
  shouldShow: boolean
}

type MenuReducer = Reducer<State, UnionedAction>

const initialState: State = {
  shouldShow: false,
}

export const menuReducer: MenuReducer = (
  state = initialState,
  action: UnionedAction
): State => {
  switch (action.type) {
    case ActionTypes.SET_SHOULD_SHOW_MENU:
      return {
        ...state,
        shouldShow: action.payload.shouldShow,
      }
    default: {
      return state
    }
  }
}
