import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './reducers'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'

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
    </BrowserRouter>
  )
}

const store = createStore(rootReducer)

if (document.getElementById('app')) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app') as HTMLElement
  )
}
