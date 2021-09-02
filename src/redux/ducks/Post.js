export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
const DELETE_POST = 'DELETE_POST';

export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  posts: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  error: error,
});

export const deletePost = (id) => ({
  type: DELETE_POST,
  id: id,
});

const initialState = {
  isLoading: false,
  posts: [],
  error: '',
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, isLoading: true };
    case FETCH_POSTS_SUCCESS:
      const { posts } = action;
      return { ...state, isLoading: false, posts: posts, error: '' };
    case FETCH_POSTS_FAILURE:
      const { error } = action;
      return { ...state, isLoading: false, posts: [], error: error };

    case DELETE_POST:
      const { id } = action;
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== id),
      };

    default:
      return state;
  }
};
