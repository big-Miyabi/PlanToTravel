import { ActionTypes } from './index'

export const setLoginState = (state: boolean) =>
  ({
    type: ActionTypes.SET_LOGIN_STATE,
    payload: {
      state,
    },
  } as const)

export const setLoginInfo = (
  id: number,
  username: string,
  header: string,
  icon: string,
  profile: string | null
) =>
  ({
    type: ActionTypes.SET_LOGIN_INFO,
    payload: {
      id,
      username,
      header,
      icon,
      profile,
    },
  } as const)
