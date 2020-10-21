import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { loginReducer } from './loginReducer'
import { menuReducer } from './menuReducer'
import { postReducer } from './postReducer'

// 永続化の設定
const persistConfig = {
  key: 'root', // Storageに保存されるキー名を指定する
  storage, // 保存先としてlocalStorageがここで設定される
  whitelist: ['loginReducer', 'postReducer'], // Stateは`loginReducer`のみStorageに保存する
  // blacklist: ['hoge'] // `hoge`は保存しない
}

// 永続化設定されたReducerとして定義
const rootReducer = combineReducers({
  loginReducer,
  menuReducer,
  postReducer,
})
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
)

export type RootState = ReturnType<typeof rootReducer>

export default persistedReducer
