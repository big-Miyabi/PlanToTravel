import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import GlobalNav from './GlobalNav'
import Top from './Top'
import About from './About'
import Register from './Register'
import Login from './Login'
import Post from './Post'
import PostEdit from './PostEdit'
import LikeTest from './likeTest'

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
      <Route path="/postEdit" component={PostEdit} />
      <Route path="/likeTest" component={LikeTest} />
    </BrowserRouter>
  )
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'))
}
