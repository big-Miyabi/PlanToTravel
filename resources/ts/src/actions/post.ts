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
