import { ActionTypes } from './index'

export const setPostProgressIndex = (
  progressIndex: number
) =>
  ({
    type: ActionTypes.SET_POST_PROGRESS_INDEX,
    payload: {
      progressIndex,
    },
  } as const)

export const setPostOverview = (
  title: string,
  dateS: string,
  dateF: string,
  people: number,
  tags: string[]
) =>
  ({
    type: ActionTypes.SET_POST_OVERVIEW,
    payload: {
      title,
      dateS,
      dateF,
      people,
      tags,
    },
  } as const)
