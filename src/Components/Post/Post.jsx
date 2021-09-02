import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Post.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { deletePost } from '../../redux/ducks/Post';

const Post = (props) => {
  const currentUser = useSelector((state) => state.user.userName);
  const { id, title, body, author, date } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/posts/${id}`)
      .then((response) => {
        console.log(response);
        dispatch(deletePost(id));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="post">
      <div className="post__title">{title}</div>
      <div className="post__body">{body}</div>
      <div className="post__author">
        {author}, {date}
        {author === currentUser ? (
          <div className="post__bottom">
            <button className="post__bottom__edit">
              <Link to={`/edit/${id}`}>EDIT</Link>
            </button>
            <button
              onClick={() => handleDelete(id)}
              className="post__bottom__delete"
            >
              DELETE
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Post;
