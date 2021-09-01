import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Post from '../../Components/Post/Post';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://localhost:8000/posts')
      .then((response) => {
        setPosts(response.data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setPosts([]);
        setIsLoading(false);
        setError(error);
      });
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
