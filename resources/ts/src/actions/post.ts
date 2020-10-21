import { ActionTypes } from './index'

export const setPostProgressIndex = (index: number) =>
  ({
    type: ActionTypes.SET_POST_PROGRESS_INDEX,
    payload: {
      index,
    },
  } as const)
