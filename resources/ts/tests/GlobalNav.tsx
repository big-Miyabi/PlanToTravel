import React, { FC } from 'react'
import { Link } from 'react-router-dom'
const GlobalNav: FC = () => {
  return (
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
        <Link to="/post">
          <li>Post</li>
        </Link>
        <Link to="/postEdit">
          <li>PostEdit</li>
        </Link>
        <Link to="/profEdit">
          <li>profEdit</li>
        </Link>
        <Link to="/result">
          <li>Result</li>
        </Link>
      </ul>
    </nav>
  )
}

export default GlobalNav
