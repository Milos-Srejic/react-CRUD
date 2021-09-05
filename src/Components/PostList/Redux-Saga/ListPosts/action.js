import { GET_POSTS, SET_POSTS_FAILURE, SET_POSTS_SUCCESS } from "../constants";

export const getPosts = (payload) => {
	return {
		type: GET_POSTS,
		payload,
	};
};

export const setPostsSuccess = (posts) => ({
	type: SET_POSTS_SUCCESS,
	payload: posts,
});

export const setPostsFailure = (error) => ({
	type: SET_POSTS_FAILURE,
	payload: error,
});
