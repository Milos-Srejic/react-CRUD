import React from 'react';
import './Error.css';
import { useHistory } from 'react-router-dom';

const Error = () => {
  const history = useHistory();
  return (
    <div className="error">
      <h1>ERROR 404 PAGE NOT FOUND</h1>
      <button
        className="error__button"
        onClick={() => {
          history.push('/');
        }}
      >
        HOME PAGE
      </button>
    </div>
  );
};

export default Error;
