import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../Pages/Login/Redux-Saga/Login/action';
import './Header.css';

const Header = () => {
  const isUserLoggedIn = useSelector((state) => state.login);
  //   const username
  //   console.log(username);

  const dispatch = useDispatch();

  return (
    <div className="header">
      <Link to="/">
        <h1>POST 📬</h1>
      </Link>
      {isUserLoggedIn.isLogged ? (
        <ul className="header__list">
          <li>Hi {isUserLoggedIn.userName}</li>
          <li className="header__list__link">
            <Link to="/create">Create Post</Link>
          </li>
          <li
            className="header__list__link"
            onClick={() => dispatch(logout(false))}
          >
            Log out
          </li>
          <li className="header__list__link">
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Header;
