import { Reducer } from 'redux'
import {
  ActionTypes,
  UnionedAction,
} from '../actions/index'

type State = {
  progressIndex: number
}

type PostReducer = Reducer<State, UnionedAction>

const initialState: State = {
  progressIndex: 0,
}

export const postReducer: PostReducer = (
  state = initialState,
  action: UnionedAction
): State => {
  switch (action.type) {
    case ActionTypes.SET_POST_PROGRESS_INDEX:
      return {
        ...state,
        progressIndex: action.payload.progressIndex,
      }
    default: {
      return state
    }
  }
}
