import { setLoginState, setLoginInfo } from './login'
import { setShouldShowMenu } from './menu'
import {
  setPostProgressIndex,
  setPostOverview,
} from './post'

export enum ActionTypes {
  SET_LOGIN_STATE = 'SET_LOGIN_STATE',
  SET_LOGIN_INFO = 'SET_LOGIN_INFO',
  SET_SHOULD_SHOW_MENU = 'SET_SHOULD_SHOW_MENU',
  SET_POST_PROGRESS_INDEX = 'SET_POST_PROGRESS_INDEX',
  SET_POST_OVERVIEW = 'SET_POST_OVERVIEW',
}

export type UnionedAction =
  | ReturnType<typeof setLoginState>
  | ReturnType<typeof setLoginInfo>
  | ReturnType<typeof setShouldShowMenu>
  | ReturnType<typeof setPostProgressIndex>
  | ReturnType<typeof setPostOverview>
