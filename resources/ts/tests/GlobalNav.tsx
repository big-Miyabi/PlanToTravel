import React, { FC } from 'react';
import {Link} from 'react-router-dom';

const GlobalNav:FC = () => {
  return(
    <nav>
      <ul>
        <Link to="/">
          <li>Top</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/regist">
          <li>Register</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  )
}

export default GlobalNav;
