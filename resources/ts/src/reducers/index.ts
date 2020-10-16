import { combineReducers } from 'redux'
import { loginStateReducer } from './loginStateReducer'

export const rootReducer = combineReducers({
  loginStateReducer,
})

export type RootState = ReturnType<typeof rootReducer>
