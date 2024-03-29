import { Reducer } from 'redux'
import {
  ActionTypes,
  UnionedAction,
} from '../actions/index'
import { Place, initialPlace } from '../utilities/types'

type State = {
  progressIndex: number
  title: string
  dateS: string
  dateF: string
  people: number
  tags: string[]
  isPublic: boolean
  src: string
  itinerary: Place[][]
}

type PostReducer = Reducer<State, UnionedAction>

const initialState: State = {
  progressIndex: 0,
  title: '',
  dateS: '',
  dateF: '',
  people: 1,
  tags: [],
  isPublic: false,
  src: '',
  itinerary: [[initialPlace]],
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
        isPublic: action.payload.isPublic,
      }
    case ActionTypes.SET_IMAGE_SRC:
      return {
        ...state,
        src: action.payload.src,
      }
    case ActionTypes.SET_CREATED_ITINERARY:
      return {
        ...state,
        itinerary: action.payload.itinerary,
      }
    default: {
      return state
    }
  }
}
