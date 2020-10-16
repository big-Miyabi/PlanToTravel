import { combineReducers } from 'redux'
import { loginStateReducer } from './loginReducer'

export const rootReducer = combineReducers({
  loginStateReducer,
})

export type RootState = ReturnType<typeof rootReducer>
