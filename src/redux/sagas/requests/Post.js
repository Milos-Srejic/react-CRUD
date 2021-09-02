import axios from 'axios';

export function requestGetPosts() {
  return axios.request({
    method: 'GET',
    url: 'http://localhost:8000/posts',
  });
}
