import React from 'react';
import Post from '../Post/Post';

const PostList = () => {
  return (
    <div>
      <Post
        id="1"
        title="lorem"
        body="jasdbhshakjsdbhakjsbhdkjasbh"
        author="Sreja"
      />
      <Post id="2" title="lorem" body="pera mika zika" author="Pera" />
    </div>
  );
};

export default PostList;
