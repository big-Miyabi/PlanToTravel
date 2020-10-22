import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { PersistPartial } from 'redux-persist/es/persistReducer'
import { persistStore } from 'redux-persist'
import persistedReducer, {
  RootState,
} from '../src/reducers'
import GlobalNav from './GlobalNav'
import Top from './Top'
import About from './About'
import Register from './Register'
import Login from './Login'
import Post from './Post'

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalNav />
      {/*完全一致のため、exactを付与*/}
      <Route path="/" exact component={Top} />
      <Route path="/about" component={About} />
      <Route path="/hoge" component={Register} />
      <Route path="/hogehoge" component={Login} />
      <Route path="/post" component={Post} />
    </BrowserRouter>
  )
}

const store = createStore<
  RootState & PersistPartial,
  any,
  any,
  any
>(
  persistedReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
const persistor = persistStore(store)

if (document.getElementById('app')) {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    document.getElementById('app') as HTMLElement
  )
}
