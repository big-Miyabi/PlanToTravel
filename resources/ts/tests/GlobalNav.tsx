import React, { FC } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

const GlobalNav:FC = () => {
  axios
    .get('/api/get')
    .then((res) => {
      //todosを更新（描画がかかる）
    })
    .catch(error => {
      console.log(error)
    })

  return(
    <nav>
      <ul>
        <Link to="/">
          <li>Top</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/hoge">
          <li>Register</li>
        </Link>
        <Link to="/hogehoge">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  )
}

export default GlobalNav;
