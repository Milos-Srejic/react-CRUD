import React from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>UPDATE {id}</h1>
    </div>
  );
};

export default Edit;