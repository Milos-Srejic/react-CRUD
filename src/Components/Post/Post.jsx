import React from 'react';
import { useSelector } from 'react-redux';
import './Post.css';

const Post = (props) => {
  const currentUser = useSelector((state) => state.user.userName);
  const { id, title, body, author } = props;
  return (
    <div className="post">
      <div className="post__title">{title}</div>
      <div className="post__body">{body}</div>
      <div className="post__author">
        {author}
        {author === currentUser ? (
          <div className="post__bottom">
            <button className="post__bottom__edit">EDIT</button>
            <button className="post__bottom__delete">DELETE</button>
          </div>
        ) : null}{' '}
      </div>
    </div>
  );
};

export default Post;
