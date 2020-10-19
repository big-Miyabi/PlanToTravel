import { ActionTypes } from './index'

export const setShouldShowMenu = (shouldShow: boolean) =>
  ({
    type: ActionTypes.SET_SHOULD_SHOW_MENU,
    payload: {
      shouldShow,
    },
  } as const)
