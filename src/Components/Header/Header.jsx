import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/ducks/User';
import './Header.css';

const Header = () => {
  const username = useSelector((state) => state.user.userName);
  const isLogged = useSelector((state) => state.user.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <h1>POST 📬</h1>
      {isLogged ? (
        <ul className="header__list">
          <li>Hi {username}</li>
          <li className="header__list__link">
            <Link to="/create">Create Post</Link>
          </li>
          <li className="header__list__link" onClick={() => dispatch(logout())}>
            Log out
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Header;
