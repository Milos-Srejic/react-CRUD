import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>POST 📬</h1>
      <ul className="header__list">
        <li>
          <Link to="/create">Create Post</Link>
        </li>
        <li>username</li>
      </ul>
    </div>
  );
};

export default Header;
