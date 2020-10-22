import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { PersistPartial } from 'redux-persist/es/persistReducer'
import { persistStore } from 'redux-persist'
import persistedReducer, { RootState } from './reducers'
import RegisterScreen from './components/screens/RegisterScreen'
import HomeScreen from './components/screens/HomeScreen'
import PostScreen from './components/screens/PostScreen'

const App: FC = () => {
  return (
    <BrowserRouter>
      {/*完全一致のため、exactを付与*/}
      <Route
        path="/regist"
        exact
        component={RegisterScreen}
      />
      <Route
        path={['/', '/home']}
        exact
        component={HomeScreen}
      />
      <Route
        path={[
          '/post',
          '/post/overview',
          '/post/location',
          '/post/confirm',
        ]}
        exact
        component={PostScreen}
      />
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
