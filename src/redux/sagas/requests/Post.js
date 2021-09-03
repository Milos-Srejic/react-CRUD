import axios from 'axios';

export function requestGetPosts() {
  return axios.request({
    method: 'GET',
    url: 'http://localhost:8000/posts',
  });
}

export function requestDeletePostApi(id) {
  return axios.request({
    method: 'DELETE',
    url: `http://localhost:8000/posts/${id}`,
  });
}
