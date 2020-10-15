import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import RegisterScreen from './screens/RegisterScreen'

import Register from './screens/RegisterScreen'

const App: FC = () => {
  return (
    <BrowserRouter>
      <RegisterScreen />
      {/*完全一致のため、exactを付与*/}
      <Route
        path="/regist"
        exact
        component={Register}
      />
    </BrowserRouter>
  )
}

if (document.getElementById('app')) {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
}
