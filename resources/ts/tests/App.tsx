import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import GlobalNav from './GlobalNav';
import Top from './Top';
import About from './About';

const App: FC = () => {
  return(
    <BrowserRouter>
      <GlobalNav />
      {/*完全一致のため、exactを付与*/}
      <Route path="/" exact component={Top} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  )
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
