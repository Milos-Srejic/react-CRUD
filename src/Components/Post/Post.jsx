import React from 'react';
import { useSelector } from 'react-redux';

const Post = (props) => {
  const currentUser = useSelector((state) => state.user.userName);
  const { id, title, body, author } = props;
  return (
    <div className="post">
      <div className="post__title">{title}</div>
      <div className="post__body">{body}</div>
      <div className="post__author">{author} </div>
      {author === currentUser ? (
        <div className="post__bottom">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ) : null}
    </div>
  );
};

export default Post;
