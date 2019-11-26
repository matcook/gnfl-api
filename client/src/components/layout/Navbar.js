import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <a onClick={onLogout} href="#!">
          Logout
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </Fragment>
  );

  return (
    <div>
      <h1>Navbar</h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};
export default Navbar;
