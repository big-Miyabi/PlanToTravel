import { setLoginState, setLoginInfo } from './login'

export enum ActionTypes {
  SET_LOGIN_STATE = 'SET_LOGIN_STATE',
  SET_LOGIN_INFO = 'SET_LOGIN_INFO',
}

export type UnionedAction =
  | ReturnType<typeof setLoginState>
  | ReturnType<typeof setLoginInfo>
