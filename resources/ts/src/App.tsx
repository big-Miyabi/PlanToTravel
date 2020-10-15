import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
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
      <Route path="/" exact component={HomeScreen} />
    </BrowserRouter>
  )
}

if (document.getElementById('app')) {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
}
