export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

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
    default:
      return state;
  }
};
