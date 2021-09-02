import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../../Components/Post/Post';
import { fetchPosts } from '../../redux/ducks/Post';

const PostList = () => {
  const posts = useSelector((state) => state.post.posts);
  const isLoading = useSelector((state) => state.post.isLoading);
  const error = useSelector((state) => state.post.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      {isLoading ? 'Loading...' : null}
      {error ? <h3>{error}</h3> : null}
      {posts &&
        posts.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              author={post.author}
              date={post.fullDate}
            />
          );
        })}
    </div>
  );
};

export default PostList;
