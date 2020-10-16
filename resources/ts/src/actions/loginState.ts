import { ActionTypes } from './index'

export const setLoginState = (state: boolean) =>
  ({
    type: ActionTypes.LOGIN_STATE,
    payload: {
      state,
    },
  } as const)
