import { setLoginState } from './loginState'

export enum ActionTypes {
  LOGIN_STATE = 'LOGIN_STATE',
}

export type UnionedAction = ReturnType<typeof setLoginState>
