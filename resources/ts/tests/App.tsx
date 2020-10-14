import React, { FC } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";

import GlobalNav from './GlobalNav';
import Top from './Top';
import About from './About';
import Register from './Register';
import Login from './Login';

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalNav />
      {/*完全一致のため、exactを付与*/}
      <Route path="/" exact component={Top} />
      <Route path="/about" component={About} />
      <Route path="/hoge" component={Register} />
      <Route path="/hogehoge" component={Login} />
    </BrowserRouter>
  );
};

if (document.getElementById("app")) {
  ReactDOM.render(<App />, document.getElementById("app"));
}
