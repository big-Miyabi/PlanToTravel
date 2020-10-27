import { Reducer } from 'redux'
import {
  ActionTypes,
  UnionedAction,
} from '../actions/index'
import moment from 'moment'

type State = {
  progressIndex: number
  title: string
  dateS: string
  dateF: string
  people: number
  tags: string[]
  src: string
}

type PostReducer = Reducer<State, UnionedAction>

moment.locale('ja')

const initialState: State = {
  progressIndex: 0,
  title: '',
  dateS: moment().format('YYYY-MM-DD'),
  dateF: moment().format('YYYY-MM-DD'),
  people: 1,
  tags: [],
  src: '',
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
    case ActionTypes.SET_POST_OVERVIEW:
      return {
        ...state,
        title: action.payload.title,
        dateS: action.payload.dateS,
        dateF: action.payload.dateF,
        people: action.payload.people,
        tags: action.payload.tags,
      }
    case ActionTypes.SET_IMAGE_SRC:
      return {
        ...state,
        src: action.payload.src,
      }
    default: {
      return state
    }
  }
}
