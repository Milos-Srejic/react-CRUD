import React from 'react';
import Header from '../../Components/Header/Header';
import PostList from '../../Components/PostList/PostList';

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <PostList />
    </div>
  );
};

export default Homepage;
