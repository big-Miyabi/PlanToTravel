import { Reducer } from 'redux'
import {
  ActionTypes,
  UnionedAction,
} from '../actions/index'

type State = {
  state: boolean
}

type LoginReducer = Reducer<State, UnionedAction>

const initialState: State = {
  state: false,
}

export const loginStateReducer: LoginReducer = (
  state = initialState,
  action: UnionedAction
): State => {
  switch (action.type) {
    case ActionTypes.LOGIN_STATE:
      return {
        ...state,
        state: action.payload.state,
      }
    default: {
      return state
    }
  }
}
