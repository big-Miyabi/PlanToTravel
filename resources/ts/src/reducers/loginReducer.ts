import { Reducer } from 'redux'
import {
  ActionTypes,
  UnionedAction,
} from '../actions/index'

type State = {
  state: boolean
  id: number
  username: string
  header: string
  icon: string
  profile: string | null
}

type LoginReducer = Reducer<State, UnionedAction>

const initialState: State = {
  state: false,
  id: 0,
  username: 'unknown',
  header: '',
  icon: '',
  profile: null,
}

export const loginReducer: LoginReducer = (
  state = initialState,
  action: UnionedAction
): State => {
  switch (action.type) {
    case ActionTypes.SET_LOGIN_STATE:
      return {
        ...state,
        state: action.payload.state,
      }
    case ActionTypes.SET_LOGIN_INFO:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        header: action.payload.header,
        icon: action.payload.icon,
        profile: action.payload.profile,
      }
    default: {
      return state
    }
  }
}
